## 🚀 배포 링크

배포링크: [Green Salady](https://green-salady.vercel.app/)


- **1. 상품 주문**
    - Firebase를 통해 RealtimeDatabase로 상품명과 가격을 받아오고 storage를 통해 이미지 url을  받아온 후 상품 리스트를 출력합니다
    - 목록 출력 동안 loading Bar를 출력합니다.
 
        <img width="960" alt="1" src="https://github.com/taegeun1111/green-salady/assets/122959190/ea90ae6f-35e2-419a-9253-79f52d16daa8">

        
    - + -를 통해 주문 할 개수를 정한다음 Add 버튼을 클릭하게 되면 alert과 함께 장바구니에 상품이 담기게 되고 주문 할 개수는 다시 1로 초기화가 됩니다.
- **2. 검색**
    - debouncing을 통해 사용자가 입력이 멈춘 후 0.5초 후 검색이 자동으로 이루어지게 구현하였습니다.
- **3. 장바구니**
    - 장바구니에 담기게 된 상품들은 총 개수와 총 금액으로 관리되게 되며 Context를 이용하여 상태관리를 하였습니다.
    - 결제하기를 누르게 되면 modal창이 나오게되며 ‘X’나 모달 영역 외 Backdrop영역을 클릭하게 되면 장바구니에 있던 목록들이 초기화되고 database에 결제 목록들이 저장됩니다.
     
        <img width="960" alt="2" src="https://github.com/taegeun1111/green-salady/assets/122959190/0bb0c66f-318f-4a84-9ac6-687cc9abffe3">
        

## 📌 Review

**Keep**

- Context를 사용하여 상태관리를 하면서 props chain을 효율적으로 관리할 수 있었다.
- 직접 모달을 구현함으로써 구조에 대해 더 깊이 이해하게 되었다.
- 파이널 프로젝트 때 부족했던 debouncing 개념을 다시 학습하여 이해를 확실히 하게 되었다.

**Problem**

- 처음에는 Firebase 개념을 처음 접하기 때문에 이해하는데 어려움이 있었다.

**Try**

- 다행히도 AWS 자격증 공부하면서 데이터베이스에 대한 개념도 한 번더 공부해서 이해하는데 크게 어렵지는 않았다.

**느낀점**

처음에는 Backend도 내가 직접 할까라는 생각이 있었지만 지금 그것까지 하기에는 시간이 너무 오래 소요될 것 같아서 더미 데이터나 AWS S3로 작업을 진행하려고 했었다. 하지만 개인 공부 중  Firebase 것을 알고난 뒤 한 번 사용해보고 싶어서 사용해봤는데 결과는 만족스러웠다. Context도 개념만 알았지 제대로 사용해본 적은 처음인데 생각보다 유용한 것을 깨달았다. 다음엔 Redux를 사용하여 프로젝트를 만들어볼 예정이다. 그리고 Firebase에 대해서는 기술 블로그에 다시 적어서 공부할 것!
