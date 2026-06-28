/* ============================================================
   SCRIPT.JS — logika halaman (ga perlu diubah kalau cuma mau
   ganti teks/foto/lagu — itu semua di data.js)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const screens = {
    intro: document.getElementById("screen-intro"),
    quiz: document.getElementById("screen-quiz"),
    letter: document.getElementById("screen-letter"),
    finale: document.getElementById("screen-finale"),
  };

  function goTo(name) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- SCREEN 1: INTRO ---------------- */
  document.getElementById("intro-title").textContent = LOVE_DATA.intro.title;
  document.getElementById("intro-subtitle").textContent = LOVE_DATA.intro.subtitle;
  const btnStart = document.getElementById("btn-start");
  btnStart.textContent = LOVE_DATA.intro.buttonText;
  btnStart.addEventListener("click", () => {
    initQuiz();
    goTo("quiz");
  });

  /* ---------------- SCREEN 2: QUIZ ---------------- */
  document.getElementById("quiz-title").textContent = LOVE_DATA.quiz.title;
  document.getElementById("quiz-instruction").textContent = LOVE_DATA.quiz.instruction;

  const progressWrap = document.getElementById("quiz-progress");
  const questionWrap = document.getElementById("quiz-question-wrap");
  const questionEl = document.getElementById("quiz-question");
  const optionsEl = document.getElementById("quiz-options");
  const feedbackEl = document.getElementById("quiz-feedback");
  const feedbackText = document.getElementById("quiz-feedback-text");
  const btnQuizNext = document.getElementById("btn-quiz-next");

  let currentQ = 0;

  function initQuiz() {
    currentQ = 0;
    renderDots();
    renderQuestion();
  }

  function renderDots() {
    progressWrap.innerHTML = "";
    LOVE_DATA.quiz.questions.forEach((_, i) => {
      const dot = document.createElement("span");
      if (i < currentQ) dot.classList.add("done");
      if (i === currentQ) dot.classList.add("current");
      progressWrap.appendChild(dot);
    });
  }

  function renderQuestion() {
    const q = LOVE_DATA.quiz.questions[currentQ];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    feedbackEl.hidden = true;
    questionWrap.hidden = false;

    q.options.forEach((opt, i) => {
      const b = document.createElement("button");
      b.className = "option-btn";
      b.textContent = opt;
      b.addEventListener("click", () => selectAnswer(i));
      optionsEl.appendChild(b);
    });
  }

  function selectAnswer(i) {
    const q = LOVE_DATA.quiz.questions[currentQ];
    const buttons = optionsEl.querySelectorAll(".option-btn");
    buttons.forEach(b => (b.disabled = true));

    buttons[i].classList.add(i === q.correctIndex ? "correct" : "wrong");
    if (i !== q.correctIndex) {
      buttons[q.correctIndex].classList.add("correct");
    }

    feedbackText.textContent = q.fact || "";
    feedbackEl.hidden = false;

    const isLast = currentQ === LOVE_DATA.quiz.questions.length - 1;
    btnQuizNext.textContent = isLast ? "Lanjut ke surat ↦" : "Lanjut ↦";
  }

  btnQuizNext.addEventListener("click", () => {
    currentQ++;
    if (currentQ >= LOVE_DATA.quiz.questions.length) {
      initLetter();
      goTo("letter");
    } else {
      renderDots();
      renderQuestion();
    }
  });

  /* ---------------- SCREEN 3: LETTER ---------------- */
  document.getElementById("letter-title").textContent = LOVE_DATA.letter.title;
  const letterWrap = document.getElementById("letter-paragraphs");
  const letterSignature = document.getElementById("letter-signature");
  const btnLetterNext = document.getElementById("btn-letter-next");
  btnLetterNext.textContent = LOVE_DATA.letter.buttonText;

  let letterStarted = false;

  function initLetter() {
    if (letterStarted) return; // cuma jalan sekali
    letterStarted = true;
    letterWrap.innerHTML = "";
    letterSignature.textContent = "";
    btnLetterNext.hidden = true;
    typeParagraphs(LOVE_DATA.letter.paragraphs, 0);
  }

  function typeParagraphs(paragraphs, index) {
    if (index >= paragraphs.length) {
      letterSignature.textContent = LOVE_DATA.letter.signature;
      btnLetterNext.hidden = false;
      return;
    }
    const p = document.createElement("p");
    p.classList.add("typing");
    letterWrap.appendChild(p);
    typeText(p, paragraphs[index], 28, () => {
      p.classList.remove("typing");
      typeParagraphs(paragraphs, index + 1);
    });
  }

  function typeText(el, text, speed, done) {
    let i = 0;
    const interval = setInterval(() => {
      el.textContent = text.slice(0, i + 1);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        done && done();
      }
    }, speed);
  }

  btnLetterNext.addEventListener("click", () => {
    initFinale();
    goTo("finale");
  });

  /* ---------------- SCREEN 4: FINALE ---------------- */
  document.getElementById("finale-title").textContent = LOVE_DATA.finale.title;
  document.getElementById("finale-message").textContent = LOVE_DATA.finale.message;
  document.getElementById("music-note").textContent = LOVE_DATA.music.note;

  const photoWall = document.getElementById("photo-wall");
  const spotifyFrame = document.getElementById("spotify-frame");
  const btnReplay = document.getElementById("btn-replay");
  btnReplay.textContent = LOVE_DATA.finale.replayText;

  let finaleStarted = false;

  function initFinale() {
    if (finaleStarted) return;
    finaleStarted = true;

    spotifyFrame.src = `https://open.spotify.com/embed/track/${LOVE_DATA.music.spotifyTrackId}?utm_source=generator&theme=0`;

    photoWall.innerHTML = "";
    LOVE_DATA.photos.forEach(photo => {
      const fig = document.createElement("figure");
      fig.className = "polaroid";

      const frame = document.createElement("div");
      frame.className = "frame";

      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.caption || "";
      img.loading = "lazy";
      img.addEventListener("error", () => {
        frame.innerHTML = "";
        const ph = document.createElement("div");
        ph.className = "placeholder";
        ph.textContent = "Taruh foto kalian di assets/photos/ 📸";
        frame.appendChild(ph);
      });

      frame.appendChild(img);
      fig.appendChild(frame);

      const caption = document.createElement("figcaption");
      caption.textContent = photo.caption || "";
      fig.appendChild(caption);

      fig.addEventListener("click", () => openLightbox(photo));
      photoWall.appendChild(fig);
    });
  }

  /* ---------------- LIGHTBOX ---------------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  function openLightbox(photo) {
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.caption || "";
    lightboxCaption.textContent = photo.caption || "";
    lightbox.hidden = false;
  }
  lightboxClose.addEventListener("click", () => (lightbox.hidden = true));
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) lightbox.hidden = true;
  });

  /* ---------------- REPLAY ---------------- */
  btnReplay.addEventListener("click", () => {
    letterStarted = false;
    goTo("intro");
  });

});
