
let submit = document.getElementById('form');
let amnt = document.getElementById('floatingInput1');
let dec = document.getElementById('floatingInput');
let slct = document.getElementById('floatingSelect');
submit.addEventListener('submit', addDetails);


function addDetails(e){
    e.preventDefault();
    window.localStorage.clear();

    let amnt = e.target.amount.value;
    let dec = e.target.des.value;
    let slct = e.target.category.value;

    // localStorage.setItem('amount', amnt);
    // localStorage.setItem('description', dec);
    // localStorage.setItem('catagory', slct);
    let obj = {amnt, dec, slct};
    localStorage.setItem(amnt, JSON.stringify(obj));
    document.getElementById('form').reset();
    showOn(obj);
}

function showOn(obj){
    let parentEle = document.getElementById('users');
    let childEle = document.createElement('li');
    childEle.textContent = obj.amnt + ' - ' + obj.dec + ' - ' + obj.slct;
    parentEle.appendChild(childEle);    
    // console.log(childEle);

    const dltbtn = document.createElement('input');
    dltbtn.type = 'button';
    dltbtn.value = 'Delete Expence';
    dltbtn.className = 'button';
    childEle.appendChild(dltbtn);

    dltbtn.onclick = () => {
        localStorage.removeItem(obj.amnt);
        parentEle.removeChild(childEle);
    }

    const edtbtn = document.createElement('input');
    edtbtn.type = 'button';
    edtbtn.value = 'Edit Expence'
    edtbtn.className = 'button1';
    childEle.appendChild(edtbtn);

    edtbtn.onclick = () => {
        localStorage.removeItem(obj.amnt);
        parentEle.removeChild(childEle);

        document.getElementById('floatingInput1').value = obj.amnt;
        document.getElementById('floatingInput').value = obj.dec;
        document.getElementById('floatingSelect').value = obj.slct;
    }
}
