var abtBtn = document.getElementById("aboutBtn");
var abtContent = document.getElementById("aboutContent");

abtBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  abtContent.style.display =
    abtContent.style.display === "block" ? "none" : "block";
});

abtContent.addEventListener("click", (e) => {
  e.stopPropagation(); // clicking inside shouldn't close it
});

document.addEventListener("click", () => {
  abtContent.style.display = "none";
});

// Get the modal
var modal = document.getElementById("portfolioModal");

// Get the button that opens the modal
var btn = document.getElementById("portfolioBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





// ── LIGHTBOX ──────────────────────────────────────────────────
 
// Map each image filename to a description
const imageDescriptions = {
  "YoungWorldTOUR2-betterRes.jpg": "Young World Tour — (Photoshop) — Grunge announcement poster design for Soman Chainani's YOUNG WORLD national book tour.",
  "steffihuber.jpg": "Character Poster (\"Steffi Huber\") — (Photoshop) — Marketing character poster for upcoming Penguin Random House novel release. Bauhaus style.",
  "HollywoodYoungWorld.jpg": "Young World Hollywood — (Photoshop) — Promotional social graphic in a photorealistic style.",
  "1-RY-on-WM.jpg": "Revolting Youth on Washington Monument — (Photoshop) — Promotional social graphic in a photorealistic style.",
  "9-YuzuruGrunge.jpg": "Character Poster (\"Yuzuru Mori\") — (Photoshop) — Marketing character poster for upcoming Penguin Random House novel release. Brutalist style.",
  "DoaNCover.jpg": "\"Diary of a Novel\" book cover and layout — (Adobe Illustrator) — Cover and interior design for 500+ page companion novel to YOUNG WORLD",
  "e33-YTthumbnail.jpg": "Plot Twist Ep33 Thumbnail — (Photoshop) — YouTube thumbnail for award-winning writing podcast PLOT TWIST. Designed for maximum engagement with episode-specific themeing.",
  "e35-YTthumbnail.jpg": "Plot Twist Ep35 Thumbnail — (Photoshop) — Continuation of the PLOT TWIST thumbnail series, maintaining episodic creativity.",
  "11.4.2-YuzuruPoster3COLOR2.jpg": "Alternate Character Poster (\"Yuzuru Mori\") — (Photoshop) — Defining posted social media graphic on the official YOUNG WORLD marketing Instagram account: @revoltingyouthofficial.",
};
 
// Build the lightbox overlay
var lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.innerHTML = `
  <div id="lightbox-inner">
    <img id="lightbox-img" src="" alt="" />
    <p id="lightbox-caption"></p>
  </div>
`;
document.body.appendChild(lightbox);
 
// Attach click handlers to every portfolio image
document.querySelectorAll(".modal-col img").forEach(function (img) {
  img.style.cursor = "url('/img/pointerCursor.png'), pointer";
  img.addEventListener("click", function (e) {
    e.stopPropagation();
    var src = img.getAttribute("src");
    var filename = src.split("/").pop();
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-caption").textContent =
      imageDescriptions[filename] || "";
    lightbox.classList.add("active");
  });
});
 
// Close lightbox when clicking outside the inner box
lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});
 
// Also close with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});