
    const bookCart = new Vue({
      el: "#bookCart",
      data: {

        book: [
          {  name: "算法导论", date: "2006-9", price: 85, num: 1 },
          { name: "linux编程艺术", date: "2006-2", price: 59, num: 1 },
          {  name: "编程珠玑", date: "2006-9", price: 39, num: 1 },
          {  name: "代码大全", date: "2006-9", price: 128, num: 1 },
        ]


      },
      computed: {

        // totalPrice() {
        //   let total = 0;
        //   for (const i in this.book) {
        //     total += this.book[i].price * this.book[i].num;
        //   }
        //   // return "￥" + total.toFixed(2);
        //   return total;
        // }
// 使用reduce高阶函数进行运算
//         totalPrice(){
//           return this.book.reduce(function(previousValue,n){
// return previousValue+n.price*n.num;
//           },0)
//         }
totalPrice(){
  return this.book.reduce((previousValue,n) => previousValue+n.price*n.num,0);
}
      },

      methods: {

        remove: function (index) {
          this.book.splice(index, 1);         
        },

        // getFinalPrice(a) {
        //   return "￥" + a.toFixed(2);
        // },

        order: function (index) {
          return index+1;
        },

        decrease(index) {
      
          if (this.book[index].num == 1) {
            // alert("已无法继续减少，请选择移除！！");
            this.book.splice(index,1);
          } else {
            return this.book[index].num--;
          }

        }
      },
      filters: {
        showPrice(price) {
          return "￥" + price.toFixed(2);
        }
      }

    })


