const countries = {
    0: [
        { name: 'Szovjetunió', flag: 'su_flg/00su.gif', map: 'su_map/00su.jpg' },
        { name: 'Azerbajdzsán',  flag: 'su_flg/01abj.gif', map: 'su_map/01abj.gif' },
        { name: 'Észtország', flag: 'su_flg/02est.gif', map: 'su_map/02est.gif' },
        { name: 'Fehéroroszország', flag: 'su_flg/03bel.gif', map: 'su_map/03bel.gif' },
        { name: 'Grúzia', flag: 'su_flg/04gru.gif', map: 'su_map/04gru.gif' },
        { name: 'Kazahsztán', flag: 'su_flg/05kaz.gif', map: 'su_map/05kaz.gif' },
        { name: 'Kirgizisztán', flag: 'su_flg/06kyr.gif', map: 'su_map/06kyr.gif' },
        { name: 'Lettország', flag: 'su_flg/07lat.gif', map: 'su_map/07lat.gif' },
        { name: 'Litvánia', flag: 'su_flg/08lit.gif', map: 'su_map/08lit.gif' },
        { name: 'Moldova', flag: 'su_flg/09mld.gif', map: 'su_map/09mld.gif' },
        { name: 'Oroszország', flag: 'su_flg/10rus.gif', map: 'su_map/10rus.gif' },
        { name: 'Örményország', flag: 'su_flg/11arm.gif', map: 'su_map/11arm.gif' },
        { name: 'Tádzsikisztán', flag: 'su_flg/12taj.gif', map: 'su_map/12taj.gif' },
        { name: 'Türkmenisztán', flag: 'su_flg/13tur.gif', map: 'su_map/13tur.gif' },
        { name: 'Ukrajna', flag: 'su_flg/14ukr.gif', map: 'su_map/14ukr.gif' },
        { name: 'Üzbegisztán', flag: 'su_flg/15uzb.gif', map: 'su_map/15uzb.gif' },
    ],
    1: [
        { name: 'Jugoszlávia', flag: 'yu_flg/00yu.gif', map: 'yu_map/00yu.png' },
        { name: 'Bosznia és Hercegovina', flag: 'yu_flg/01bih.gif', map: 'yu_map/01bih.gif' },
        { name: 'Horvátország', flag: 'yu_flg/02cro.gif', map: 'yu_map/02cro.gif' },
        { name: 'Koszovó', flag: 'yu_flg/03kos.png', map: 'yu_map/03kos.gif' },
        { name: 'Macedónia', flag: 'yu_flg/04mac.gif', map: 'yu_map/04mac.gif' },
        { name: 'Montenegro', flag: 'yu_flg/05crn.gif', map: 'yu_map/05crn.gif' },
        { name: 'Szerbia', flag: 'yu_flg/06srb.gif', map: 'yu_map/06srb.gif' },
        { name: 'Szlovénia', flag: 'yu_flg/07slo.gif', map: 'yu_map/07slo.gif' },
    ],
    2: [
        { name: 'Csehszlovákia', flag: 'cz_flg/cz_flag.png', map: 'cz_map/cz_map.jpg' },
        { name: 'Csehország', flag: 'cz_flg/cz_flag.png', map: 'cz_map/cz_map.jpg' },
        { name: 'Szlovákia', flag: 'cz_flg/cz_flag.png', map: 'cz_map/cz_map.jpg' }
    ]
};

function feltolt()
{

  if(document.lap.voltorszag.value==0)
  {
    document.lap.orszag.length=1
    zaszlo.innerHTML=""
    terkep.innerHTML=""
  }

  if(document.lap.voltorszag.value==1)
  {
    document.lap.orszag.length=countries[0].length

    for (let i = 0; i < countries[0].length; i++) {
        document.lap.orszag.options[i].text = countries[0][i].name
        document.lap.orszag.options[i].value = i
    }

    document.lap.orszag.selectedIndex=0
    zaszlo.innerHTML=`<img src="${countries[0][document.lap.orszag.value].flag}">`
    terkep.innerHTML=`<img src="${countries[0][document.lap.orszag.value].map}">`
  }

  if(document.lap.voltorszag.value==2)
  {
    document.lap.orszag.length=countries[1].length

    for (let i = 0; i < countries[1].length; i++) {
        document.lap.orszag.options[i].text = countries[1][i].name
        document.lap.orszag.options[i].value = i
    }

    document.lap.orszag.selectedIndex=0
    zaszlo.innerHTML=`<img src="${countries[1][document.lap.orszag.value].flag}">`
    terkep.innerHTML=`<img src="${countries[1][document.lap.orszag.value].map}">`
  }

  if (document.lap.voltorszag.value == 3) {

    document.lap.orszag.length = countries[2].length

    for (let i = 0; i < countries[2].length; i++) {
        document.lap.orszag.options[i].text = countries[2][i].name
        document.lap.orszag.options[i].value = i
    }

    document.lap.orszag.selectedIndex = 0
    zaszlo.innerHTML=`<img src="${countries[2][document.lap.orszag.value].flag}">`
    terkep.innerHTML=`<img src="${countries[2][document.lap.orszag.value].map}">`
  }

}

function frissit()
{

  if(document.lap.voltorszag.value==1)
  {
    zaszlo.innerHTML=`<img src="${countries[0][document.lap.orszag.value].flag}" >`
    terkep.innerHTML=`<img src="${countries[0][document.lap.orszag.value].map}" >`
  }

  if(document.lap.voltorszag.value==2)
  {
    zaszlo.innerHTML=`<img src="${countries[1][document.lap.orszag.value].flag}" >`
    terkep.innerHTML=`<img src="${countries[1][document.lap.orszag.value].map}" >`
  }

  if (document.lap.voltorszag.value == 3) {
    zaszlo.innerHTML = `<img src="${countries[2][document.lap.orszag.value].flag}">`
    terkep.innerHTML=`<img src="${countries[2][document.lap.orszag.value].map}">`
  }
}
