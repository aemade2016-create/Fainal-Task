// Declare a variable to store the video source
let videoSrc;

// Add click event listener to all elements with class "video-btn"
document.querySelectorAll(".video-btn").forEach((button) => {
    button.addEventListener("click", () => {
        // Get the video source from the data-src attribute
        videoSrc = button.dataset.src;
        console.log(videoSrc);
    });
});

// Add event listener for when the modal is opened
document.getElementById("myModal").addEventListener("shown.bs.modal", () => {
    // Update the video source with autoplay and other options
    document.getElementById("video").src =
        videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";
});

// Add event listener for when the modal is closed
document.getElementById("myModal").addEventListener("hide.bs.modal", () => {
    // Stop the video by resetting the source
    document.getElementById("video").src = videoSrc;
});
const textElement = document.querySelector('.circle-text');
const textContent = textElement.innerText;
textElement.innerHTML = '';
const totalChars = textContent.length;
textElement.style.setProperty('--total', totalChars);
for (let i = 0; i < totalChars; i++) {
    const span = document.createElement('span');
    span.innerText = textContent[i];
    span.style.setProperty('--i', i);
    textElement.appendChild(span);
}
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
        const updateCount = () => {
            const target = parseInt(counter.getAttribute("data-target"));
            const count = parseInt(counter.innerText);
            const speed = 10;
            const inc = Math.ceil(target / speed);

            if (count < target) {
                const nextCount = count + inc;
                counter.innerText = nextCount > target ? target : nextCount;

                setTimeout(updateCount, 30);
            }
             else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});

const buttons = document.querySelectorAll('.toggle-btn');
buttons.forEach(btn => {
    btn.addEventListener('click', function () {

        const textElement = this.parentElement.nextElementSibling;

        if (textElement.classList.contains('d-none')) {
            textElement.classList.remove('d-none');
            this.innerText = '-';
        } else {
            textElement.classList.add('d-none');
            this.innerText = '+';
        }
    });
});