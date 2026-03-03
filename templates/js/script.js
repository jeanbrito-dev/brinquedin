window.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 0.8s ease";
    setTimeout(() => {
      document.body.style.opacity = 1;
    }, 100);
  });
  
  document.querySelectorAll(".nav__item a").forEach(link => {
    link.addEventListener("click", function () {
      const id = this.id;
      const section = document.querySelector("section#" + id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  const elementos = document.querySelectorAll(
    ".section, .category-card, .offer-item, .form-group"
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });
  
  elementos.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
  });
  
  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero__banner img");
    if (hero) {
      const scroll = window.scrollY;
      hero.style.transform = `translateY(${scroll * 0.2}px)`;
    }
  });
  
  document.querySelectorAll(".category-card").forEach(card => {
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "none";
    });
  });
  
  document.querySelectorAll(".price").forEach(price => {
    setInterval(() => {
      price.style.transition = "transform 0.3s ease";
      price.style.transform = "scale(1.1)";
      setTimeout(() => {
        price.style.transform = "scale(1)";
      }, 300);
    }, 3000);
  });
  
  const form = document.getElementById("form-contato");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const btn = form.querySelector(".btn-submit");
    btn.innerText = "Enviando...";
    btn.style.backgroundColor = "#4CAF50";
    btn.style.color = "#fff";
  
    setTimeout(() => {
      btn.innerText = "Enviado ✓";
      btn.style.backgroundColor = "#2ecc71";
  
      form.reset();
  
      setTimeout(() => {
        btn.innerText = "Enviar";
        btn.style.backgroundColor = "";
        btn.style.color = "";
      }, 2000);
    }, 1500);
  });