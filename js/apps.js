window.addEventListener('load', () => {
    const form = document.querySelector('#form');
    const header = document.querySelector(".header");

    header.classList.add('header');

    const c = document.createElement('span');
    c.innerHTML = "C";

    const r = document.createElement('span');
    r.innerHTML = "r";

    const e = document.createElement('span');
    e.innerHTML = "e";

    const a = document.createElement('span');
    a.innerHTML = "a";

    const t = document.createElement('span');
    t.innerHTML = "t";

    const space1 = document.createElement('span');
    space1.innerHTML = "&nbsp;";

    const y = document.createElement('span');
    y.innerHTML = "Y";

    const o = document.createElement('span');
    o.innerHTML = "o";

    const u = document.createElement('span');
    u.innerHTML = "u";

    const rr = document.createElement('span');
    rr.innerHTML = "r";

    const space2 = document.createElement('span');
    space2.innerHTML = "&nbsp;";

    const p = document.createElement('span');
    p.innerHTML = "P";

    const rrr = document.createElement('span');
    rrr.innerHTML = "r";

    const oo = document.createElement('span');
    oo.innerHTML = "o";

    const f = document.createElement('span');
    f.innerHTML = "f";

    const i = document.createElement('span');
    i.innerHTML = "i";

    const l = document.createElement('span');
    l.innerHTML = "l";

    const ee = document.createElement('span');
    ee.innerHTML = "e";


    header.appendChild(c);
    header.appendChild(r);
    header.appendChild(e);
    header.appendChild(a);
    header.appendChild(t);
    header.append(space1);
    header.appendChild(y);
    header.appendChild(o);
    header.appendChild(u);
    header.appendChild(rr);
    header.append(space2);
    header.appendChild(p);
    header.appendChild(rrr);
    header.appendChild(oo);
    header.appendChild(f);
    header.appendChild(i);
    header.appendChild(l);
    header.appendChild(ee);

    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add('input__wrapper');
    form.appendChild(inputWrapper);

    const inputFirstName = document.createElement('input');
    inputFirstName.classList.add('input');
    inputFirstName.placeholder = "FirstName";
    inputFirstName.type = 'text';

    const inputLastName = document.createElement('input');
    inputLastName.classList.add('input');
    inputLastName.placeholder = "LastName";
    inputLastName.type = 'text';

    const inputEmail = document.createElement('input');
    inputEmail.classList.add('input');
    inputEmail.placeholder = "Email Address";
    inputEmail.type = 'text';

    const inputPhoneNumber = document.createElement('input');
    inputPhoneNumber.classList.add('input');
    inputPhoneNumber.placeholder = "Phone Number";
    inputPhoneNumber.type = 'text';

    const inputPassword = document.createElement('input');
    inputPassword.classList.add('input');
    inputPassword.placeholder = "Password";
    inputPassword.type = 'password';

    const inputComfirmPassword = document.createElement('input');
    inputComfirmPassword.classList.add('input');
    inputComfirmPassword.placeholder = "Comfirm Password";
    inputComfirmPassword.type = 'password';

    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('btn__wrapper');
    const btn = document.createElement('button');
    btn.classList.add('button');
    btn.type = "submit";
    btn.innerHTML = 'Send';
    btnWrapper.appendChild(btn);


    inputWrapper.appendChild(inputFirstName);
    inputWrapper.appendChild(inputLastName);
    inputWrapper.appendChild(inputEmail);
    inputWrapper.appendChild(inputPhoneNumber);
    inputWrapper.appendChild(inputPassword);
    inputWrapper.appendChild(inputComfirmPassword);
    form.appendChild(btnWrapper);
})