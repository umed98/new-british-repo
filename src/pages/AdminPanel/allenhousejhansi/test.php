<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <div class="sm:w-[1280px] mx-auto mt-5">
        <div class="w-[700px] mx-auto">
            <input id="postcode" class="p-2 w-[100%] border-[1px]" name="postcode" placeholder="Enter postcode" />
            <button id="searchBtn" class="mt-2 p-2 bg-blue-500 text-white">Search</button>
            <div id="results" class="mt-4 p-4 border-[1px]"></div>
        </div>

    </div>
    <script>
    async function postToken(clientId, clientSecret) {
        const url = 'https://api.platform.bt.com/oauth/accesstoken?grant_type=client_credentials';
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(`${clientId}:${clientSecret}`));
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        const body = new URLSearchParams({
            grant_type: 'client_credentials',
        });

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: body.toString(), // Include the body with grant_type
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(
                    `Error fetching POST token: ${response.status} ${response.statusText}\n${errorText}`);
            }

            const data = await response.json();
            return data.access_token;
        } catch (error) {
            console.error('Error fetching POST token:', error);
            throw error;
        }
    }

    async function fetchGeographicAddress(postcode, token) {
        // const url = `https://api-sandbox.wholesale.bt.com/common/geographicAddressManagement/v1/geographicAddress?postcode=${encodeURIComponent(postcode)}&isSiteClassificationRequired=true&isTechonologyMarkersRequired=true&isFuzzyMatch=true`;

        const url =
            `https://api-sandbox.wholesale.bt.com/common/geographicAddressManagement/v1/geographicAddress?postcode=SW128NX&isSiteClassificationRequired=true&isTechonologyMarkersRequired=true&isFuzzyMatch=true`;

        const headers = new Headers();
        headers.append('Authorization', `Bearer ${token}`);
        headers.append('Content-Type', 'application/json');
        headers.append('APIGW-Tracking-Header', '96bb97fa-b941-46bb-8c4e-86c616c28a13');
        headers.append('APIGW-Client-Id', 'UfSLSOGQTMsfiNSuiGzB5CFcowsgA8Vk');
        headers.append('btDuns', '221283316');
        headers.append('UDID', '12344556');
        headers.append('Recaptcha-Response-Token', '45tYU789000H');

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(
                    `Error fetching address data: ${response.status} ${response.statusText}\n${errorText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching address data:', error);
            throw error;
        }
    }

    document.getElementById('searchBtn').addEventListener('click', async () => {
        const postcode = document.getElementById('postcode').value.trim();
        const resultsContainer = document.getElementById('results');
        resultsContainer.textContent = 'Loading...';

        if (!postcode) {
            resultsContainer.textContent = 'Please enter a postcode.';
            return;
        }

        const clientId = 'UfSLSOGQTMsfiNSuiGzB5CFcowsgA8Vk';
        const clientSecret = 'qdGBdqxr3NU8tW8c';

        try {
            const token = await postToken(clientId, clientSecret);
            const data = await fetchGeographicAddress(postcode, token);

            if (data && data.geographicAddress) {
                resultsContainer.innerHTML = `
                <h3>Results for ${postcode}:</h3>
                <pre>${JSON.stringify(data.geographicAddress, null, 2)}</pre>
            `;
            } else {
                resultsContainer.textContent = 'No data found.';
            }
        } catch (error) {
            resultsContainer.textContent = `Error: ${error.message}`;
        }
    });
    </script>
</body>

</html>