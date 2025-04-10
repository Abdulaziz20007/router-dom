import React from "react";

function Home() {
  return (
    <div className="home-page">
      <h1>Xush kelibsiz!</h1>
      <div className="dashboard-info">
        <p>Bu dashboard quyidagi imkoniyatlarni taqdim etadi:</p>
        <ul>
          <li>
            <strong>Counter:</strong> React state bilan ishlashga misol
          </li>
          <li>
            <strong>Users:</strong> Foydalanuvchilar ro'yxati va qidiruv
          </li>
          <li>
            <strong>Products:</strong> FakeStoreAPI dan olingan mahsulotlar
          </li>
        </ul>
        <p>
          Kerakli sahifani tanlash uchun chap tomondagi menyu orqali o'ting.
        </p>
      </div>
    </div>
  );
}

export default Home;
