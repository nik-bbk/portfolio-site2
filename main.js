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
  "YoungWorldTOUR2-betterRes.jpg": "Young World Tour — poster design for a fictional indie music tour. Layered typography meets analog-inspired textures.",
  "steffihuber.jpg": "Steffi Huber — personal branding and visual identity for an athlete. Clean, kinetic, and bold.",
  "HollywoodYoungWorld.jpg": "Hollywood Young World — promotional graphic blending vintage Hollywood glamour with modern streetwear energy.",
  "1-RY-on-WM.jpg": "RY on WM — editorial layout combining photography with expressive type treatments.",
  "9-YuzuruGrunge.jpg": "Yuzuru Grunge — fan art poster with a raw, distressed aesthetic celebrating figure skater Yuzuru Hanyu.",
  "DoaNCover.jpg": "Days of a Nightmare — book cover design. Dark, atmospheric, with strong typographic hierarchy.",
  "DoaN-layoutpage.jpg": "Days of a Nightmare (Interior) — interior layout spread balancing readability with visual drama.",
  "e33-YTthumbnail.jpg": "Episode 33 Thumbnail — YouTube thumbnail designed for maximum click-through with bold composition.",
  "e35-YTthumbnail.jpg": "Episode 35 Thumbnail — continuation of the series thumbnail system, maintaining brand consistency.",
  "11.4.2-YuzuruPoster3COLOR2.jpg": "Yuzuru Poster — three-color screen-print style poster. Minimal palette, maximum impact.",
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