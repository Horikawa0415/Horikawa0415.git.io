{/* <script> */}
    {/* const inputText = document.getElementById('input-text'); */}
    const button = document.getElementById('button');
    inputText.addEventListener('keyup', (e) => {
      if (5 <= e.target.value.length) {
        //入力された文字が5文字以上なら実行される
        button.disabled = false;
      }
    })
// </script>