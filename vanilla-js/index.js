
document.addEventListener("DOMContentLoaded", () => {

    const $emailInput = document.getElementById("email");
    const $passwordInput = document.getElementById("password");
    // Login 버튼 클릭 이벤트 리스너 추가
    document.getElementById("theaterLoginBtn").addEventListener("click", () => {

        // 이메일 유효성 검사
        const emailRegex = /^[a-zA-Z0-9.]+@[a-z0-9._-]+\.co$/;
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@~]).{8,20}$/;

        const emailInput = $emailInput.value.trim();
        const passwordInput = $passwordInput.value.trim();

        // 입력값 검증
        if (!emailInput || !passwordInput) {
            window.alert("이메일 혹은 비밀번호가 입력되지 않았습니다.");
            return;
        }
        // 비밀번호 유효성 검사
        if (passwordInput.length < 8 || passwordInput.length > 20) {
            window.alert("비밀번호는 최소 8자 이상, 최대 20자 이하로 구성해야 합니다.");
            return;
        }

        if (!emailRegex.test(emailInput)) {
            window.alert("이메일 형식이 올바르지 않습니다.");
            return;
        }

        if (!passwordRegex.test(passwordInput)) {
            window.alert("비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다.");
            return;
        }

        // 모든 유효성 검사 통과 시
        window.alert("로그인 성공!");
    });
});






// ------------------------ // 


// const theaterSeats = document.getElementById('theaterSeat');
// const remainSeatCnt = document.getElementById('remainSeatCnt');
// const amountDisplay = document.getElementById('amount');
// const reselectButton = document.getElementById('reselect');
// const checkHandicap = document.getElementById('checkHandicap');

// let totalSeats = 39;
// let remainingSeats = 39;
// let selectedSeats = [];
// let totalAmount = 0;

// // 좌석 클릭 핸들러
// theaterSeats.addEventListener('click', (event) => {
//     const seat = event.target;

//     if (!seat.classList.contains('seat') || seat.classList.contains('disabled')) {
//         return;
//     }

//     if (seat.classList.contains('selected')) {
//         seat.classList.remove('selected');
//         selectedSeats = selectedSeats.filter((id) => id !== seat.textContent);
//         totalAmount -= calculateSeatPrice(seat);
//     } else {
//         if (selectedSeats.length >= 8) {
//             alert('최대 8명까지 선택 가능합니다.');
//             return;
//         }
//         seat.classList.add('selected');
//         selectedSeats.push(seat.textContent);
//         totalAmount += calculateSeatPrice(seat);
//     }

//     updateSeatInfo();
// });

// // 초기화 버튼 핸들러
// reselectButton.addEventListener('click', () => {
//     selectedSeats.forEach((seatNum) => {
//         const seat = Array.from(theaterSeats.children).find(
//             (btn) => btn.textContent === seatNum
//         );
//         if (seat) {
//             seat.classList.remove('selected');
//         }
//     });
//     selectedSeats = [];
//     totalAmount = 0;
//     updateSeatInfo();
// });

// // 체크박스 이벤트
// checkHandicap.addEventListener('change', (event) => {
//     const handicapSeats = Array.from(
//         document.querySelectorAll('.seat.handicap')
//     );

//     if (event.target.checked) {
//         handicapSeats.forEach((seat) => seat.classList.remove('disabled'));
//     } else {
//         handicapSeats.forEach((seat) => seat.classList.add('disabled'));
//     }
// });

// // 좌석 정보 업데이트
// function updateSeatInfo() {
//     remainingSeats = totalSeats - selectedSeats.length;
//     remainSeatCnt.textContent = remainingSeats;
//     amountDisplay.textContent = totalAmount.toLocaleString();
// }

// // 좌석 가격 계산
// function calculateSeatPrice(seat) {
//     if (seat.classList.contains('handicap')) {
//         return 5000;
//     } else if (seat.classList.contains('musseukbox')) {
//         return 10000;
//     }
//     return 15000;
// }

// // 초기화
// updateSeatInfo();
