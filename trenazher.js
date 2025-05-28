function ENGLISHPUNCTUATION (keyboardLayout) {
const keyboardContainer = document.getElementById(keyboardLayout);
keyboardContainer.innerHTML = `
    <div class="line">
    <div class="key" id="ё">ё</div>
    <div class="key" id="1">1</div>
    <div class="key" id="2">2</div>
    <div class="key" id="3">3</div>
    <div class="key" id="4">4</div>
    <div class="key" id="5">5</div>
    <div class="key" id="6">6</div>
    <div class="key" id="7">7</div>
    <div class="key" id="8">8</div>
    <div class="key" id="9">9</div>
    <div class="key" id="0">0</div>
    <div class="key" id="-">-</div>
    <div class="key" id="=">=</div>
    <div class="key" id="Backspace" style="width: 100px;">Backspace</div>
  </div>

  <div class="line">
    <div class="key" id="Tab" style="width: 70px;">Tab</div>
    <div class="key" id="й">й</div>
    <div class="key" id="ц">ц</div>
    <div class="key" id="у">у</div>
    <div class="key" id="к">к</div>
    <div class="key" id="е">е</div>
    <div class="key" id="н">н</div>
    <div class="key" id="г">г</div>
    <div class="key" id="ш">ш</div>
    <div class="key" id="щ">щ</div>
    <div class="key" id="з">з</div>
    <div class="key" id="х">х</div>
    <div class="key" id="ъ">ъ</div>
    <div class="key" id="\""  style="width: 66px;">\</div>
  </div>

  <div class="line">
    <div class="key" id="Caps" style="width: 90px;">Caps</div>
    <div class="key" id="ф">ф</div>
    <div class="key" id="ы">ы</div>
    <div class="key" id="в">в</div>
    <div class="key" id="а">а</div>
    <div class="key" id="п">п</div>
    <div class="key" id="р">р</div>
    <div class="key" id="о">о</div>
    <div class="key" id="л">л</div>
    <div class="key" id="д">д</div>
    <div class="key" id="ж">ж</div>
    <div class="key" id="э">э</div>
    <div class="key" id="Enter" style="width: 91px;">Enter</div>
  </div>

  <div class="line">
    <div class="key" id="ShiftLeft" style="width: 113px;">Shift</div>
    <div class="key" id="я">я</div>
    <div class="key" id="ч">ч</div>
    <div class="key" id="с">с</div>
    <div class="key" id="м">м</div>
    <div class="key" id="и">и</div>
    <div class="key" id="т">т</div>
    <div class="key" id="ь">ь</div>
    <div class="key" id="б">б</div>
    <div class="key" id="ю">ю</div>
    <div class="key" id=".">.</div>
    <div class="key" id="ShiftRight" style="width: 112px;">Shift</div>
  </div>

  <div class="line">
    <div class="key" id="Ctrl"  style="width: 80px;" >Ctrl</div>
    <div class="key" id="Win"  style="width: 50px;">Win</div>
    <div class="key" id="Alt"  style="width: 40px;" >Alt</div>
    <div class="key" id="Space"  style="width: 245px;"></div>
    <div class="key" id="Alt"  style="width: 40px;">Alt</div>
    <div class="key" id="Fn"  style="width: 93px;">Fn</div>
    <div class="key" id="Ctrl"  style="width: 80px;">Ctrl</div>
  </div>
</div>
`;
}

function RUSSIANPUNCTUATION  (keyboardLayout) {
  const keyboardContainer = document.getElementById(keyboardLayout);
  keyboardContainer.innerHTML = `
    <div class="line">
    <div class="key" id="ё">ё</div>
    <div class="key" id="1">1</div>
    <div class="key" id="2">2</div>
    <div class="key" id="3">3</div>
    <div class="key" id="4">4</div>
    <div class="key" id="5">5</div>
    <div class="key" id="6">6</div>
    <div class="key" id="7">7</div>
    <div class="key" id="8">8</div>
    <div class="key" id="9">9</div>
    <div class="key" id="0">0</div>
    <div class="key" id="-">-</div>
    <div class="key" id="=">=</div>
    <div class="key" id="Backspace" style="width: 100px;">Backspace</div>
  </div>

  <div class="line">
    <div class="key" id="Tab" style="width: 70px;">Tab</div>
    <div class="key" id="й">й</div>
    <div class="key" id="ц">ц</div>
    <div class="key" id="у">у</div>
    <div class="key" id="к">к</div>
    <div class="key" id="е">е</div>
    <div class="key" id="н">н</div>
    <div class="key" id="г">г</div>
    <div class="key" id="ш">ш</div>
    <div class="key" id="щ">щ</div>
    <div class="key" id="з">з</div>
    <div class="key" id="х">х</div>
    <div class="key" id="ъ">ъ</div>
    <div class="key" id="\""  style="width: 66px;">\</div>
  </div>

  <div class="line">
    <div class="key" id="Caps" style="width: 90px;">Caps</div>
    <div class="key" id="ф">ф</div>
    <div class="key" id="ы">ы</div>
    <div class="key" id="в">в</div>
    <div class="key" id="а">а</div>
    <div class="key" id="п">п</div>
    <div class="key" id="р">р</div>
    <div class="key" id="о">о</div>
    <div class="key" id="л">л</div>
    <div class="key" id="д">д</div>
    <div class="key" id="ж">ж</div>
    <div class="key" id="э">э</div>
    <div class="key" id="Enter" style="width: 91px;">Enter</div>
  </div>

  <div class="line">
    <div class="key" id="ShiftLeft" style="width: 113px;">Shift</div>
    <div class="key" id="я">я</div>
    <div class="key" id="ч">ч</div>
    <div class="key" id="с">с</div>
    <div class="key" id="м">м</div>
    <div class="key" id="и">и</div>
    <div class="key" id="т">т</div>
    <div class="key" id="ь">ь</div>
    <div class="key" id="б">б</div>
    <div class="key" id="ю">ю</div>
    <div class="key" id=".">.</div>
    <div class="key" id="ShiftRight" style="width: 112px;">Shift</div>
  </div>

  <div class="line">
    <div class="key" id="Ctrl"  style="width: 80px;" >Ctrl</div>
    <div class="key" id="Win"  style="width: 50px;">Win</div>
    <div class="key" id="Alt"  style="width: 40px;" >Alt</div>
    <div class="key" id="Space"  style="width: 245px;"></div>
    <div class="key" id="Alt"  style="width: 40px;">Alt</div>
    <div class="key" id="Fn"  style="width: 93px;">Fn</div>
    <div class="key" id="Ctrl"  style="width: 80px;">Ctrl</div>
  </div>
</div>
   
`
}