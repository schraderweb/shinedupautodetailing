
 const reviews = [
  {
    name: "Autumn",
    time: "10 months ago",
    initial: "A",
    color: "#fbbc04",
    text: "Did Ryan do a GREAT job or what!! Prompt, honest, courteous, and respectful!! Took my SUV while I was at work and WALLA.. it is perfect!! Will use again!! You can’t even tell I use this as a taxi for my THREE Golden Retrievers!!"
  },
  {
    name: "Kaylyn Tropf",
    time: "4 months ago",
    initial: "K",
    color: "#7c3aed",
    text: "I had an incredible experience with this car detailing service! Ryan did an absolutely amazing job—my car looks brand new! As a busy mom of four, my van was a mess, but Ryan brought it back to life—inside and out. I am extremely satisfied with the results and will definitely be a repeat customer. Highly recommend!"
  },
  {
    name: "Shannon Sheffer",
    time: "a month ago",
    initial: "S",
    color: "#0891b2",
    text: "Great experience from start to finish! Ryan and team did an excellent job detailing my Audi—it looks fantastic!! Communication was great throughout the entire process, and they were professional and easy to work with. Will definitely book again!"
  },
  {
    name: "Liz Yarch",
    time: "4 months ago",
    initial: "L",
    color: "#059669",
    text: "What a refresh for my car!! It looks brand new again, I highly recommend."
  },
  {
    name: "Dave Nichols",
    time: "2 months ago",
    initial: "D",
    color: "#ef4444",
    text: "Arrived on time, professional, friendly and ready to work. Now my truck is cleaner and better looking than the day I picked it up new. Thank you ShineUp!!"
  },
  {
    name: "Cathi",
    time: "a month ago",
    initial: "C",
    color: "#2563eb",
    text: "Ryan and Jacob did a great job on detailing my 2011 Honda CRV! It hasn’t looked this clean in years! I totally recommend their work! Very nice young men and for a little extra they came to my house in TVC."
  },
//   {
//     name: "Tony Quinones",
//     time: "2 months ago",
//     initial: "T",
//     color: "#db4437",
//     text: "ShinedUp Auto Detailing did an amazing job on my 2021 Dodge Ram! The service was excellent, and my truck looks brand new again. With two labs, there was a lot of hair to deal with—but you’d never know it now. Highly recommend!"
//   },
//   {
//     name: "Wayne Toteff",
//     time: "4 months ago",
//     initial: "W",
//     color: "#0f9d58",
//     text: "I have detailed cars all my life and gave Ryan a try. I thought he did an outstanding job. I would recommend him."
//   },
//   {
//     name: "Carla Weaver",
//     time: "a month ago",
//     initial: "C",
//     color: "#f4b400",
//     text: "My work van looks amazing after Ryan worked his magic on it. I haul furniture in it for my business and my very hairy dog, so I'm sure his vacuum got a workout. I'm thrilled with my newly-cleaned ride! And it was awesome that he did the detail in my driveway!"
//   },
//   {
//     name: "Kevin Rogols",
//     time: "6 months ago",
//     initial: "K",
//     color: "#4285f4",
//     text: "I took my 2024 Ford F150 in for detailing. When I picked it up, I was amazed. It looked and smelled better than it did the first day that I got it. Ryan does a great job."
//   },
//   {
//     name: "Chris McKenney",
//     time: "8 months ago",
//     initial: "C",
//     color: "#ab47bc",
//     text: "Right on time, polite, and went right to work. I’ve never seen the exterior shine this bright and the interior looks and feels like a brand new truck!"
//   },
//   {
//     name: "Randy Coates",
//     time: "a month ago",
//     initial: "R",
//     color: "#00acc1",
//     text: "Took my truck here fresh out of winter storage for an exterior detail. Picked up and looks like new, very particular about my vehicles and was impressed. Will be a repeat customer."
//   },
//   {
//     name: "Lisa Wamsley",
//     time: "7 months ago",
//     initial: "L",
//     color: "#8bc34a",
//     text: "Ryan did an amazing and thorough job detailing my car. I would and WILL highly recommend his services!"
//   },
//   {
//     name: "Steve Montero",
//     time: "9 months ago",
//     initial: "S",
//     color: "#ff7043",
//     text: "Ryan did a fantastic job on getting tar off of our entire car. It was a pleasure to see a young man hustling to try to make a business for himself. I would highly recommend him."
//   },
//   {
//     name: "Sherri Lefebre",
//     time: "3 months ago",
//     initial: "S",
//     color: "#5c6bc0",
//     text: "Attentive to schedule changes, very accommodating! Great detail on my interior. Had a spot on the headliner I tried everything on. Ryan nailed it—gone!"
//   },
//   {
//     name: "Brook Tremblay",
//     time: "a month ago",
//     initial: "B",
//     color: "#009688",
//     text: "Great job!!! Looks amazing!! Very good with communication and super professional!! Job well done and in a speedy manner! Will definitely use again!"
//   },
//   {
//     name: "Kathy Dollar",
//     time: "7 months ago",
//     initial: "K",
//     color: "#ec407a",
//     text: "Excellent service! Very thorough and professional! Did a top notch job on my vehicle. Called yesterday, got it done today! Came right over to my place, too! My car looks and smells brand new!"
//   },
//   {
//     name: "Kelly Peterson",
//     time: "7 months ago",
//     initial: "K",
//     color: "#26a69a",
//     text: "Excellent detail on my truck! Ryan even picked up my vehicle and dropped it back off! Great customer service! Thank you Ryan!"
//   },
//   {
//     name: "Alange Alange",
//     time: "10 months ago",
//     initial: "A",
//     color: "#9c27b0",
//     text: "I have used ShinedUp Detailing several times. Ryan is always easy to work with, easy to communicate with and does a great job! There are hardly any car washes in this area that do interior cleaning. Finding a mobile detailer was extremely convenient. I would highly recommend ShinedUp Detailing!"
//   },
//   {
//     name: "Robert Samuel",
//     time: "2 months ago",
//     initial: "R",
//     color: "#3f51b5",
//     text: "Ryan came to my house and did a terrific job on my interior. I would highly recommend him."
//   },
//   {
//     name: "Rhonda Guntzviller",
//     time: "6 months ago",
//     initial: "R",
//     color: "#795548",
//     text: "Beautiful work. My truck looks like it’s brand new. Thank you and your team for the great service."
//   }
];
  const reviewsGrid = document.getElementById("reviewsGrid");
  const sliderDots = document.getElementById("sliderDots");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const reviewModal = document.getElementById("reviewModal");
  const modalClose = document.getElementById("modalClose");
  const modalAvatar = document.getElementById("modalAvatar");
  const modalName = document.getElementById("modalName");
  const modalTime = document.getElementById("modalTime");
  const modalText = document.getElementById("modalText");

  let currentIndex = 0;

  function getVisibleCount() {
    const width = window.innerWidth;

    if (width <= 600) return 1;
    if (width <= 900) return 2;
    if (width <= 1100) return 3;

    return 4;
  }

  function renderReviews() {
    const visibleCount = getVisibleCount();
    reviewsGrid.innerHTML = "";

    for (let i = 0; i < visibleCount; i++) {
      const reviewIndex = (currentIndex + i) % reviews.length;
      const review = reviews[reviewIndex];

      reviewsGrid.innerHTML += `
        <div class="review-card">
          <div class="review-top">
            <div class="review-user">
              <div class="avatar" style="background:${review.color}">
                ${review.initial}
              </div>

              <div class="user-info">
                <h4>${review.name}</h4>
                <span>${review.time}</span>
              </div>
            </div>

            <img
              class="google-logo"
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
          </div>

          <div class="stars">★★★★★</div>

          <p class="review-text">${review.text}</p>

          <button class="read-review-btn" onclick="openReviewModal(${reviewIndex})">
            Read complete review
          </button>
        </div>
      `;
    }

    renderDots();
  }

  function renderDots() {
    sliderDots.innerHTML = "";

    reviews.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "dot";

      if (index === currentIndex) {
        dot.classList.add("active");
      }

      dot.addEventListener("click", () => {
        currentIndex = index;
        renderReviews();
      });

      sliderDots.appendChild(dot);
    });
  }

  function openReviewModal(index) {
    const review = reviews[index];

    modalAvatar.textContent = review.initial;
    modalAvatar.style.background = review.color;
    modalName.textContent = review.name;
    modalTime.textContent = review.time;
    modalText.innerHTML = review.text;

    reviewModal.classList.add("active");
  }

  function closeReviewModal() {
    reviewModal.classList.remove("active");
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    renderReviews();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    renderReviews();
  });

  modalClose.addEventListener("click", closeReviewModal);

  reviewModal.addEventListener("click", (e) => {
    if (e.target === reviewModal) {
      closeReviewModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeReviewModal();
    }
  });

  window.addEventListener("resize", renderReviews);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    renderReviews();
  }, 5000);

  renderReviews();
