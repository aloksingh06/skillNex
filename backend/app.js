// const linkedIn = require('linkedin-jobs-api');

// const queryOptions = {
//   keyword: 'software engineer',
//   location: 'India',
//   dateSincePosted: '24hr',
//   jobType: 'full time',
//   remoteFilter: 'remote',
//   salary: '100000',
//   experienceLevel: 'entry level',
//   limit: '10',
//   page: "0",
//   has_verification: false,
//   under_10_applicants: false,
// };

// linkedIn.query(queryOptions).then(response => {
// 	console.log(response); // An array of Job objects
// });





//youtube api call code

// 1. Apni API Key aur search term (skill) set karein
// const API_KEY = "AIzaSyAL8JUFPUzDUNU_5BQ6kpY7nH1XkCvDWDA";
// const skillToSearch = "React tutorial for beginners"; // Isse aap user ke gap ke hisaab se badal sakte hain

// // 2. YouTube API ka URL taiyaar karein
// const searchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(skillToSearch)}&type=video&maxResults=3&key=${API_KEY}`;

// // 3. API call karne ke liye ek function banayein
// async function findVideos() {
//     try {
//         // 4. API ko call karein aur response ka intezaar karein
//         const response = await fetch(searchURL);
        
//         // Agar response mein koi error hai (jaise 404 ya 500)
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
        
//         // 5. Response ko JSON format mein parse karein
//         const data = await response.json();
        
//         // 6. Results ko process karein aur console par dikhayein
//         console.log("API Response Data:", data); // Poora data dekhne ke liye

//         if (data.items && data.items.length > 0) {
//             data.items.forEach(item => {
//                 const videoTitle = item.snippet.title;
//                 const videoId = item.id.videoId;
//                 const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
                
//                 console.log(`Title: ${videoTitle}`);
//                 console.log(`Link: ${videoLink}`);
//                 console.log("---");
//             });
//         } else {
//             console.log("Koi results nahi mile.");
//         }

//     } catch (error) {
//         console.error("API call fail ho gayi:", error);
//     }
// }

// // Function ko run karein
// findVideos();





//search engine code


// --- Configuration ---
// 1. Apni Google API Key yahaan daalein (Cloud Console se)
const API_KEY = "AIzaSyCA7b4IYsSkjjrZq2d0XhO3kepkVLRI5Is";

// 2. Apni Search Engine ID yahaan daalein (CSE Website se)
const CX_ID = "a60dbd01f7c434bad";

// 3. Jo skill ya topic dhoondhna hai
const query = "React hooks tutorial";
// --- End Configuration ---

/**
 * Google Custom Search API ko call karne ke liye function
 * @param {string} searchTerm - Jo aap search karna chahte hain.
 */
async function findArticles(searchTerm) {
    
    // 4. API URL taiyaar karein
    // encodeURIComponent yeh sunishchit karta hai ki query mein spaces sahi se handle hon
    const searchURL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX_ID}&q=${encodeURIComponent(searchTerm)}&num=3`;
    // &num=3 ka matlab hai humein 3 results chahiye

    console.log(`Searching for: ${searchTerm} using URL: ${searchURL}`);

    try {
        // 5. API ko call karein
        const response = await fetch(searchURL);

        // Agar response 'ok' (status 200-299) nahi hai toh handle karein
        if (!response.ok) {
            // Try to parse response body for more details
            let bodyText = null;
            try {
                bodyText = await response.text();
            } catch (e) {
                bodyText = `<unable to read response body: ${e.message}>`;
            }

            // Special-case 403 to provide actionable troubleshooting steps
            if (response.status === 403) {
                console.error("Custom Search API returned 403 Forbidden.");
                console.error("Response body:", bodyText);
                console.error("Possible causes and next steps:");
                console.error("  - The API key (API_KEY) may be invalid or deleted. Verify the key in the Google Cloud Console.");
                console.error("  - The 'Custom Search API' might not be enabled for the project that owns the API key. Enable it in APIs & Services.");
                console.error("  - The Search Engine ID (CX_ID) may be incorrect or the CSE isn't configured to search the web. Open the CSE control panel and confirm settings (e.g., 'Search the entire web' vs restricted sites).");
                console.error("  - The API key may have application restrictions (HTTP referrers, IP addresses) that block this environment. Try removing restrictions or matching them to the runtime.");
                console.error("  - Billing/quotas: ensure the project has billing enabled if required and that you have not exceeded quota.");
                console.error("  - If you recently created the key or enabled the API, wait a minute for changes to propagate.");
                console.error("If you want, paste the (redacted) values of API_KEY and CX_ID here and I can help check them (do NOT share the raw key publicly).");
                return;
            }

            // For other HTTP errors, include status and body for diagnostics
            throw new Error(`HTTP error! Status: ${response.status}. Body: ${bodyText}`);
        }

        // 6. Response ko JSON format mein parse karein
        const data = await response.json();

        // 7. Results ko process karein aur console par dikhayein
        console.log("Full API Response:", data); // Poora data dekhne ke liye

        if (data.items && data.items.length > 0) {
            console.log("--- Search Results ---");
            data.items.forEach((item, index) => {
                console.log(`Result ${index + 1}:`);
                console.log(`  Title: ${item.title}`);
                console.log(`  Link: ${item.link}`);
                console.log(`  Snippet: ${item.snippet}`); // Chhota sa description
                console.log("----------------------");
            });
        } else {
            console.log("Aapke Custom Search Engine mein koi results nahi mile.");
        }

    } catch (error) {
        // 8. Error ko handle karein with more context
        if (error && error.message) {
            console.error("Custom Search API call failed:", error.message);
        } else {
            console.error("Custom Search API call failed:", error);
        }
        // If the error contains more details (like a ConnectTimeoutError), show the full error object
        if (error && error.cause) {
            console.error("Underlying cause:", error.cause);
        }
    }
}

// Function ko run karein
findArticles(query);