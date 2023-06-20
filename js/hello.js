// Mock data
const ordersData = {
  totalOrders: 1500,
  todaysOrders: 25
};

const salesData = {
  totalSales: 50000,
  todaysSales: 1500
};

const inventoryData = {
  totalItems: 1000,
  inStock: 500
};


const ghouriData= {
   totalItems:10000,
   inStock:1000
};

// Update dashboard values
document.getElementById('total-orders').textContent = ordersData.totalOrders;
document.getElementById('todays-orders').textContent = ordersData.todaysOrders;
document.getElementById('total-sales').textContent = salesData.totalSales;
document.getElementById('todays-sales').textContent = salesData.todaysSales;
document.getElementById('total-items').textContent = inventoryData.totalItems;
document.getElementById('in-stock').textContent = inventoryData.inStock;

document.getElementById('total-items').textContent = ghouriData.totalItems;
document.getElementById('in-stock').textContent = ghouriData.inStock;
