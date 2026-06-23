// ==========================================
// BÀI 01: KHAI BÁO BIẾN & IN CONSOLE
// ==========================================
const siteName = "MyWeb Cafe";
let topic = "Xây dựng website cá nhân chủ đề Cafe phục vụ học tập";
let imageCount = 13; // Tổng số ảnh minh họa trong trang
let isReady = true;

console.log("--- BÀI 01: KIỂM TRA BIẾN ---");
console.log("Website:", siteName);
console.log("Chủ đề:", topic);
console.log("Số ảnh:", imageCount);
console.log("Đã sẵn sàng dùng JS?", isReady);
console.log("Kiểu dữ liệu topic:", typeof topic);
console.log("-----------------------------");


// ==========================================
// BÀI 02: ĐỔI NỘI DUNG TIÊU ĐỀ BẰNG DOM
// ==========================================
const mainTitle = document.getElementById("mainTitle");
const welcomeText = document.getElementById("welcomeText");

if (mainTitle && welcomeText) {
  mainTitle.textContent = "Chào mừng tới không gian MyWeb Cafe!";
  welcomeText.textContent = "Giao diện và tính năng tương tác được kích hoạt hoàn toàn bằng JavaScript thành công.";
}


// ==========================================
// BÀI 03: THÊM NÚT CHÀO MỪNG BẰNG SỰ KIỆN CLICK
// ==========================================
const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

if (helloBtn && helloResult) {
  helloBtn.addEventListener("click", function () {
    helloResult.textContent = "☕ Chúc bạn một ngày mới tràn đầy năng lượng bên ly cà phê thơm ngon!";
  });
}


// ==========================================
// BÀI 04: ẨN/HIỆN NỘI DUNG GIỚI THIỆU
// ==========================================
const toggleAboutBtn = document.getElementById("toggleAboutBtn");
const aboutContent = document.getElementById("aboutContent");

if (toggleAboutBtn && aboutContent) {
  toggleAboutBtn.addEventListener("click", function () {
    aboutContent.classList.toggle("hidden");
    // Mở rộng: Đổi chữ trên nút theo trạng thái đóng mở
    if (aboutContent.classList.contains("hidden")) {
      toggleAboutBtn.textContent = "Hiện Chi Tiết Phân Loại";
    } else {
      toggleAboutBtn.textContent = "Ẩn Chi Tiết Phân Loại";
    }
  });
}


// ==========================================
// BÀI 05: MENU TƯƠNG TÁC ĐÓNG/MỞ RESPONSIVE
// ==========================================
const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", function () {
    mainMenu.classList.toggle("active");
    // Mở rộng: Đổi text nhãn menu
    if (mainMenu.classList.contains("active")) {
      menuToggle.textContent = "✕ Đóng";
    } else {
      menuToggle.textContent = "☰ Menu";
    }
  });

  // Mở rộng: Bấm vào một liên kết bất kỳ trong menu thì tự đóng menu lại (UX tốt trên mobile)
  const navLinks = mainMenu.querySelectorAll("a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      mainMenu.classList.remove("active");
      menuToggle.textContent = "☰ Menu";
    });
  });
}


// ==========================================
// BÀI 06: CHỌN MÀU HOẶC CHỦ ĐỀ GIAO DIỆN (CHANGE)
// ==========================================
const themeSelect = document.getElementById("themeSelect");

if (themeSelect) {
  themeSelect.addEventListener("change", function () {
    document.body.classList.remove("dark-mode", "light-mode");
    if (themeSelect.value !== "") {
      document.body.classList.add(themeSelect.value);
    }
  });
}


// ==========================================
// BÀI 07: TÌM KIẾM NHANH NỘI DUNG TRÊN WEBSITE
// ==========================================
const searchInput = document.getElementById("searchInput");
const searchItems = document.querySelectorAll(".search-item");

if (searchInput && searchItems.length > 0) {
  searchInput.addEventListener("input", function () { // Dùng sự kiện 'input' để mượt mà hơn 'keyup'
    const keyword = searchInput.value.toLowerCase().trim();

    searchItems.forEach(function (item) {
      const text = item.textContent.toLowerCase();
      if (text.includes(keyword)) {
        item.style.display = ""; // Hiển thị lại cấu trúc mặc định ban đầu
      } else {
        item.style.display = "none"; // Ẩn phần tử không khớp từ khóa
      }
    });
  });
}


// ==========================================
// BÀI 08: LỌC GALLERY ẢNH THEO NHÓM (DATA-ATTRIBUTE)
// ==========================================
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

if (filterButtons.length > 0 && galleryItems.length > 0) {
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const filter = button.dataset.filter;

      galleryItems.forEach(function (item) {
        const category = item.dataset.category;
        if (filter === "all" || category === filter) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}


// ==========================================
// BÀI 09: KIỂM TRA VALIDATE FORM LIÊN HỆ TRƯỚC KHI GỬI
// ==========================================
const contactForm = document.getElementById("contactForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

if (contactForm && fullName && email && formMessage) {
  contactForm.addEventListener("submit", function (event) {
    // Chặn hành vi tải lại trang mặc định của form submit
    event.preventDefault();

    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();

    // Kiểm tra ô họ tên
    if (nameValue === "") {
      formMessage.textContent = "⚠️ Vui lòng nhập họ tên của bạn.";
      formMessage.style.color = "red";
      fullName.focus();
      return;
    }

    // Kiểm tra ô email hợp lệ cơ bản
    if (emailValue === "" || !emailValue.includes("@") || !emailValue.includes(".")) {
      formMessage.textContent = "⚠️ Vui lòng nhập một địa chỉ email hợp lệ (Ví dụ: tên@gmail.com).";
      formMessage.style.color = "red";
      email.focus();
      return;
    }

    // Nếu vượt qua toàn bộ kiểm tra điều kiện trên
    formMessage.textContent = "✅ Gửi thông tin thành công! Cảm ơn bạn đã phản hồi.";
    formMessage.style.color = "green";

    // Xóa sạch dữ liệu đã nhập trong form sau khi gửi thành công
    contactForm.reset();
  });
}
