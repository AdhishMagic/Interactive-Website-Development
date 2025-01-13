const button = document.getElementById('changeColor');
let isFirstGradient = true;

button.addEventListener('click', function() {
    if (isFirstGradient) {
        document.body.style.background = 'linear-gradient(to right,rgb(24, 6, 48), #0B0C10)';
        document.body.style.color= '#FEFFFF';
    } else {
        document.body.style.background = 'linear-gradient(to right, #e2e2e2, #b4fcf7)';
        document.body.style.color= '#0b0c10';

    }
    isFirstGradient = !isFirstGradient;
});

function bgChange() {
    const color = document.getElementById('input').value;
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = color;
    });
}

const fontStyleButton = document.getElementById('changeStyle');
let fontStyleIndex = 0;
const fontStyles = ['normal', 'bold', 'italic', 'underline'];

fontStyleButton.addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.fontWeight = 'normal';
        box.style.fontStyle = 'normal';
        box.style.textDecoration = 'none';
        
        if (fontStyleIndex === 1) {
            box.style.fontWeight = 'bold';
        } else if (fontStyleIndex === 2) {
            box.style.fontStyle = 'italic';
        } else if (fontStyleIndex === 3) {
            box.style.textDecoration = 'underline';
        }
    });
    fontStyleIndex = (fontStyleIndex + 1) % fontStyles.length;
});

const borderCurveButton = document.getElementById('border');
let borderCurveIndex = 0;
const borderCurves = ['radius1', 'radius2', 'radius3', 'radius4', 'radius5'];

borderCurveButton.addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.borderRadius = '30px';
        
        if (borderCurveIndex === 1) {
            box.style.borderRadius = '29% 71% 31% 69% / 98% 0% 100% 2% ';
        } else if (borderCurveIndex === 2) {
            box.style.borderRadius = '34% 66% 35% 65% / 55% 44% 56% 45% ';
        } else if (borderCurveIndex === 3) {
            box.style.borderRadius = '27% 73% 7% 93% / 90% 78% 22% 10% ';
        }else if (borderCurveIndex === 4) {
            box.style.borderRadius = '24% 76% 51% 49% / 46% 0% 100% 54% ';
        }
    });
    borderCurveIndex = (borderCurveIndex + 1) % borderCurves.length;
});

const fontSizeButton = document.getElementById('fontSize');
let fontSizeIndex = 0;
const fontSizes = ['font1', 'font2', 'font3', 'font4', 'font5', 'font6'];

fontSizeButton.addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.fontSize = '12px';
        
        if (fontSizeIndex === 1) {
            box.style.fontSize = '12px';
        } else if (fontSizeIndex === 2) {
            box.style.fontSize = '16px';
        } else if (fontSizeIndex === 3) {
            box.style.fontSize = '20px';
        }else if (fontSizeIndex === 4) {
            box.style.fontSize = '24px';
        }else if (fontSizeIndex === 5) {
            box.style.fontSize = '28px';
        }
    });
    fontSizeIndex = (fontSizeIndex + 1) % fontSizes.length;
});


const textColor = document.getElementById('textColour');
let isColor = true;

textColor.addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.color = isColor ? 'white' : 'black';
    });
    isColor = !isColor;
});

const fontFamily = document.getElementById('changeFont');
let fontfamilyIndex = 0;
const fontFamilies = ['font1', 'font2', 'font3', 'font4', 'font5', 'font6'];

fontFamily.addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.fontFamily = 'Arial';
        
        if (fontfamilyIndex === 1) {
            box.style.fontFamily = ' Times, "Times New Roman", Georgia, serif';
        } else if (fontfamilyIndex === 2) {
            box.style.fontFamily = 'Verdana, Arial, Helvetica, sans-serif';
        } else if (fontfamilyIndex === 3) {
            box.style.fontFamily = '"Lucida Console", Courier, monospace';
        }else if (fontfamilyIndex === 4) {
            box.style.fontFamily = ' cursive';
        }else if (fontfamilyIndex === 5) {
            box.style.fontFamily = ' fangsong';
        }
    });
    fontfamilyIndex = (fontfamilyIndex + 1) % fontFamilies.length;
});

document.addEventListener("DOMContentLoaded", () => {
    const loginTab = document.getElementById("login-tab");
    const registerTab = document.getElementById("register-tab");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
  
    const apiUrl = "https://jsonplaceholder.typicode.com/users"; 
    
    loginTab.addEventListener("click", () => {
      loginForm.classList.add("active");
      registerForm.classList.remove("active");
      loginTab.classList.add("active");
      registerTab.classList.remove("active");
    });
  
    registerTab.addEventListener("click", () => {
      registerForm.classList.add("active");
      loginForm.classList.remove("active");
      registerTab.classList.add("active");
      loginTab.classList.remove("active");
    });
  
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("register-email").value.trim();
      const password = document.getElementById("register-password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
  
      if (!fullname || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullname,
            email: email,
            password: password,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("User registered:", data);
          alert("Registration successful!");
          registerForm.reset();
        } else {
          alert("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Something went wrong. Please try again.");
      }
    });
  
    
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value;
  
      if (!email || !password) {
        alert("All fields are required!");
        return;
      }
  
      
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const users = await response.json();
  
          const user = users.find(
            (user) => user.email === email && user.password === password
          );
  
          if (user) {
            alert("Login successful!");
            loginForm.reset();
          } else {
            alert("Invalid email or password. Please try again.");
          }
        } else {
          alert("Login failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("Something went wrong. Please try again.");
      }
    });
  });