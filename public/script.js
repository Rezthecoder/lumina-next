document.addEventListener("DOMContentLoaded", function () {
    // Select all links with the class "lightbox-link"
    const lightboxLinks = document.querySelectorAll(".lightbox-link");

    // Loop through each lightbox link to add the download link
    lightboxLinks.forEach(link => {
        const imageTitle = link.getAttribute("data-title");  // Get current title
        const imageUrl = link.getAttribute("href");          // Get image URL

        // Append a "Download" link in the data-title
        link.setAttribute("data-title", `
            ${imageTitle} 
            <a href="${imageUrl}" download style="color: #fff; margin-left: 10px;"><i class="fa-solid fa-download fa-2x"></i></a>
        `);
    });
});
