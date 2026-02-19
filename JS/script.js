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
$(document).ready(function () {
    $("#ticker-wrapper-track").owlCarousel({
        loop: true,
        margin: 25,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    })
})
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
document.addEventListener("DOMContentLoaded", function () {
    // Common Chart Options
    const commonOptions = {
        chart: {
            type: "bar",
            height: 250,
            toolbar: { show: false },
            fontFamily: '"Hanken Grotesk", sans-serif',
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: "45%",
                distributed: true,
            },
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        grid: {
            borderColor: "#f1f5f9",
            strokeDashArray: 4,
            yaxis: { lines: { show: true } },
        },
        xaxis: {
            categories: ["M", "T", "W", "T", "F", "S", "S"],
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: {
                style: { colors: "#64748b" },
            },
        },
    };

    // Revenue Chart
    const revenueOptions = {
        ...commonOptions,
        series: [
            {
                name: "Revenue",
                data: [50, 40, 15, 45, 35, 48, 65],
            },
        ],
        colors: [
            "#316dff",
            "#316dff",
            "#316dff",
            "#ffb800",
            "#316dff",
            "#316dff",
            "#316dff",
        ],
    };

    // Appointments Chart
    const appointmentsOptions = {
        ...commonOptions,
        series: [
            {
                name: "Appointments",
                data: [40, 20, 30, 60, 90, 40, 110],
            },
        ],
        colors: [
            "#0f172a",
            "#0f172a",
            "#0f172a",
            "#0f172a",
            "#0f172a",
            "#316dff",
            "#0f172a",
        ],
    };

    const revenueChart = new ApexCharts(
        document.querySelector("#revenue-chart"),
        revenueOptions,
    );
    const appointmentsChart = new ApexCharts(
        document.querySelector("#appointments-chart"),
        appointmentsOptions,
    );

    revenueChart.render();
    appointmentsChart.render();

    // Tab Switching Logic
    const revenueTab = document.getElementById("revenue-tab");
    const appointmentsTab = document.getElementById("appointments-tab");
    const revenueContainer = document.getElementById("revenue-chart");
    const appointmentsContainer =
        document.getElementById("appointments-chart");

    revenueTab.addEventListener("click", function () {
        revenueContainer.style.display = "block";
        appointmentsContainer.style.display = "none";
        revenueTab.classList.remove("text-muted");
        appointmentsTab.classList.add("text-muted");
    });

    appointmentsTab.addEventListener("click", function () {
        revenueContainer.style.display = "none";
        appointmentsContainer.style.display = "block";
        appointmentsTab.classList.remove("text-muted");
        revenueTab.classList.add("text-muted");
        // Re-render chart to fix resize issues inside hidden div
        appointmentsChart.render();
    });
});