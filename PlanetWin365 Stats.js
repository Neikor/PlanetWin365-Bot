// ==UserScript==
// @name         PlanetWin365 Stats
// @namespace    https://s5.sir.sportradar.com/planetwin365hosted/it/1
// @version      1.0.1
// @description  Take Over and Under stats from PlanetWin365
// @author       Neikor
// @match        https://s5.sir.sportradar.com/planetwin365hosted/it/1
// @icon         https://www.planetwin365.it/App_Themes/PlanetWin365ITVU/Images/Icons/favicon.ico
// @grant        none
// ==/UserScript==


let banner = document.getElementsByClassName("banner");
let navbar = document.getElementsByClassName("row buttons flex-items-xs-middle flex-xs-nowrap");
let bloccoUnderOver;
let bloccoProssimePartite;
let tabellaUnderOver;
let arrayRighe = [];

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


function creaCheckBox(){

    let gruppoMaggiore = document.createElement('div');
    gruppoMaggiore.className = 'form-group';

    let row1 = document.createElement('div');
    row1.className = 'container'; 
    row1.style = 'margin-top:10px';
    row1.innerText = 'Seleziona le nazioni: ';
    gruppoMaggiore.appendChild(row1);

    let row2 = document.createElement('div');
    row2.className = 'container container-main contair-full-height-flex-auto';
    let col = document.createElement('div');
    col.className =  'col';
    col.style = 'display:flex'

    grp_Australia = document.createElement('div');
      grp_Australia.className = 'margin-right';
      grp_Australia.style = "padding-right:10px";
    let chbox_Australia = document.createElement('input');
      chbox_Australia.type = 'checkbox';
      chbox_Australia.className = 'image-medium margin-right inline';
      chbox_Australia.id = "Australia" ;
      chbox_Australia.name= "Australia" ;
      chbox_Australia.value= "1";
      chbox_Australia.checked = false;
    let lbl_Australia = document.createElement('label');
    lbl_Australia.textContent = 'Australia';
    grp_Australia.appendChild(chbox_Australia);
    grp_Australia.appendChild(lbl_Australia);

    col.appendChild(grp_Australia);

    grp_Austria = document.createElement('div');
      grp_Austria.className = 'margin-right';
      grp_Austria.style = "padding-right:10px";
    let chbox_Austria = document.createElement('input');
      chbox_Austria.type = 'checkbox';
      chbox_Austria.className = 'image-medium margin-right inline';
      chbox_Austria.id = "Austria" ;
      chbox_Austria.name= "Austria" ;
      chbox_Austria.value= "1";
      chbox_Austria.checked = false;
    let lbl_Austria = document.createElement('label');
    lbl_Austria.textContent = 'Austria';
    grp_Austria.appendChild(chbox_Austria);
    grp_Austria.appendChild(lbl_Austria);
    
    col.appendChild(grp_Austria);

    grp_Croazia = document.createElement('div');
      grp_Croazia.className = 'margin-right';
      grp_Croazia.style = "padding-right:10px";
    let chbox_Croazia = document.createElement('input');
      chbox_Croazia.type = 'checkbox';
      chbox_Croazia.className = 'image-medium margin-right inline';
      chbox_Croazia.id = "Croazia" ;
      chbox_Croazia.name= "Croazia" ;
      chbox_Croazia.value= "1";
      chbox_Croazia.checked = false;
    let lbl_Croazia = document.createElement('label');
    lbl_Croazia.textContent = 'Croazia';
    grp_Croazia.appendChild(chbox_Croazia);
    grp_Croazia.appendChild(lbl_Croazia);
    
    col.appendChild(grp_Croazia);

    grp_Francia = document.createElement('div');
      grp_Francia.className = 'margin-right';
      grp_Francia.style = "padding-right:10px";
    let chbox_Francia = document.createElement('input');
      chbox_Francia.type = 'checkbox';
      chbox_Francia.className = 'image-medium margin-right inline';
      chbox_Francia.id = "Francia" ;
      chbox_Francia.name= "Francia" ;
      chbox_Francia.value= "1";
      chbox_Francia.checked = false;
    let lbl_Francia = document.createElement('label');
    lbl_Francia.textContent = 'Francia';
    grp_Francia.appendChild(chbox_Francia);
    grp_Francia.appendChild(lbl_Francia);
    
    col.appendChild(grp_Francia);

    grp_Germania = document.createElement('div');
      grp_Germania.className = 'margin-right';
      grp_Germania.style = "padding-right:10px";
    let chbox_Germania = document.createElement('input');
      chbox_Germania.type = 'checkbox';
      chbox_Germania.className = 'image-medium margin-right inline';
      chbox_Germania.id = "Germania" ;
      chbox_Germania.name= "Germania" ;
      chbox_Germania.value= "1";
      chbox_Germania.checked = false;
    let lbl_Germania = document.createElement('label');
    lbl_Germania.textContent = 'Germania';
    grp_Germania.appendChild(chbox_Germania);
    grp_Germania.appendChild(lbl_Germania);
    
    col.appendChild(grp_Germania);

    grp_Inghilterra = document.createElement('div');
      grp_Inghilterra.className = 'margin-right';
      grp_Inghilterra.style = "padding-right:10px";
    let chbox_Inghilterra = document.createElement('input');
      chbox_Inghilterra.type = 'checkbox';
      chbox_Inghilterra.className = 'image-medium margin-right inline';
      chbox_Inghilterra.id = "Inghilterra" ;
      chbox_Inghilterra.name= "Inghilterra" ;
      chbox_Inghilterra.value= "1";
      chbox_Inghilterra.checked = false;
    let lbl_Inghilterra = document.createElement('label');
    lbl_Inghilterra.textContent = 'Inghilterra';
    grp_Inghilterra.appendChild(chbox_Inghilterra);
    grp_Inghilterra.appendChild(lbl_Inghilterra);
    
    col.appendChild(grp_Inghilterra);

    grp_Italia = document.createElement('div');
      grp_Italia.className = 'margin-right';
      grp_Italia.style = "padding-right:10px";
    let chbox_Italia = document.createElement('input');
      chbox_Italia.type = 'checkbox';
      chbox_Italia.className = 'image-medium margin-right inline';
      chbox_Italia.id = "Italia" ;
      chbox_Italia.name= "Italia" ;
      chbox_Italia.value= "1";
      chbox_Italia.checked = false;
    let lbl_Italia = document.createElement('label');
    lbl_Italia.textContent = 'Italia';
    grp_Italia.appendChild(chbox_Italia);
    grp_Italia.appendChild(lbl_Italia);
    
    col.appendChild(grp_Italia);

    grp_Olanda = document.createElement('div');
      grp_Olanda.className = 'margin-right';
      grp_Olanda.style = "padding-right:10px";
    let chbox_Olanda = document.createElement('input');
      chbox_Olanda.type = 'checkbox';
      chbox_Olanda.className = 'image-medium margin-right inline';
      chbox_Olanda.id = "Olanda" ;
      chbox_Olanda.name= "Olanda" ;
      chbox_Olanda.value= "1";
      chbox_Olanda.checked = false;
    let lbl_Olanda = document.createElement('label');
    lbl_Olanda.textContent = 'Olanda';
    grp_Olanda.appendChild(chbox_Olanda);
    grp_Olanda.appendChild(lbl_Olanda);
    
    col.appendChild(grp_Olanda);

    grp_Rep_Ceca = document.createElement('div');
      grp_Rep_Ceca.className = 'margin-right';
      grp_Rep_Ceca.style = "padding-right:10px";
    let chbox_Rep_Ceca = document.createElement('input');
      chbox_Rep_Ceca.type = 'checkbox';
      chbox_Rep_Ceca.className = 'image-medium margin-right inline';
      chbox_Rep_Ceca.id = "Rep_Ceca" ;
      chbox_Rep_Ceca.name= "Repubblica Ceca" ;
      chbox_Rep_Ceca.value= "1";
      chbox_Rep_Ceca.checked = false;
    let lbl_Rep_Ceca = document.createElement('label');
    lbl_Rep_Ceca.textContent = 'Repubblica Ceca';
    grp_Rep_Ceca.appendChild(chbox_Rep_Ceca);
    grp_Rep_Ceca.appendChild(lbl_Rep_Ceca);
    
    col.appendChild(grp_Rep_Ceca);

    grp_Scozia = document.createElement('div');
      grp_Scozia.className = 'margin-right';
      grp_Scozia.style = "padding-right:10px";
    let chbox_Scozia = document.createElement('input');
      chbox_Scozia.type = 'checkbox';
      chbox_Scozia.className = 'image-medium margin-right inline';
      chbox_Scozia.id = "Scozia" ;
      chbox_Scozia.name= "Scozia" ;
      chbox_Scozia.value= "1";
      chbox_Scozia.checked = false;
    let lbl_Scozia = document.createElement('label');
    lbl_Scozia.textContent = 'Scozia';
    grp_Scozia.appendChild(chbox_Scozia);
    grp_Scozia.appendChild(lbl_Scozia);
    
    col.appendChild(grp_Scozia);

    grp_Spagna = document.createElement('div');
      grp_Spagna.className = 'margin-right';
      grp_Spagna.style = "padding-right:10px";
    let chbox_Spagna = document.createElement('input');
      chbox_Spagna.type = 'checkbox';
      chbox_Spagna.className = 'image-medium margin-right inline';
      chbox_Spagna.id = "Spagna" ;
      chbox_Spagna.name= "Spagna" ;
      chbox_Spagna.value= "1";
      chbox_Spagna.checked = false;
    let lbl_Spagna = document.createElement('label');
    lbl_Spagna.textContent = 'Spagna';
    grp_Spagna.appendChild(chbox_Spagna);
    grp_Spagna.appendChild(lbl_Spagna);
    
    col.appendChild(grp_Spagna);

    grp_Svizzera = document.createElement('div');
      grp_Svizzera.className = 'margin-right';
      grp_Svizzera.style = "padding-right:10px";
    let chbox_Svizzera = document.createElement('input');
      chbox_Svizzera.type = 'checkbox';
      chbox_Svizzera.className = 'image-medium margin-right inline';
      chbox_Svizzera.id = "Svizzera" ;
      chbox_Svizzera.name= "Svizzera" ;
      chbox_Svizzera.value= "1";
      chbox_Svizzera.checked = false;
    let lbl_Svizzera = document.createElement('label');
    lbl_Svizzera.textContent = 'Svizzera';
    grp_Svizzera.appendChild(chbox_Svizzera);
    grp_Svizzera.appendChild(lbl_Svizzera);
    
    col.appendChild(grp_Svizzera);

    grp_Sel_tutto = document.createElement('div');
      grp_Sel_tutto.className = 'margin-right';
      grp_Sel_tutto.style = "padding-right:10px";
    let chbox_Sel_tutto = document.createElement('input');
      chbox_Sel_tutto.type = 'checkbox';
      chbox_Sel_tutto.className = 'image-medium margin-right inline';
      chbox_Sel_tutto.id = "Sel_tutto" ;
      chbox_Sel_tutto.name= "Sel_tutto" ;
      chbox_Sel_tutto.value= "1";
      chbox_Sel_tutto.checked = false;
    let lbl_Sel_tutto = document.createElement('label');
    lbl_Sel_tutto.textContent = 'Seleziona Tutto';
    grp_Sel_tutto.appendChild(chbox_Sel_tutto);
    grp_Sel_tutto.appendChild(lbl_Sel_tutto);
    
    col.appendChild(grp_Sel_tutto);


    row2.appendChild(col);
    gruppoMaggiore.appendChild(row2);

return gruppoMaggiore;


}



setTimeout(() => {
var imported = document.createElement('script');
imported.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
document.head.appendChild(imported);
  navbar[0].appendChild(createButton());
banner[0].appendChild(creaCheckBox());
}, 1000)


function createButton() {
  let button = document.createElement("button");
  button.className = "btn btn-default mobile-width-100 tablet-width-auto";
  button.innerText = "Statistiche";
  button.addEventListener("click", grabbiamo);
  return button;
}


let nazioni = [];
let linkPag2 = [];
let link = []


function selezionaNazioni_DaChbx() {
  nazioni = [];
  let allInput = document.querySelectorAll('input');
  let allCheckBox = [];

  for (let i = 0; i < allInput.length; i++) {
    if (allInput[i].type == 'checkbox')
      allCheckBox.push(allInput[i]);
  }

  if (allCheckBox.filter(x => x.id == 'Sel_tutto')[0].checked) {
    for (let i = 0; i < allCheckBox.length; i++) {
      if (allCheckBox[i].id != 'Sel_tutto') {
        allCheckBox[i].checked = false;
        nazioni.push(allCheckBox[i].name)
      }
      
    }
  }

  for (let i = 0; i < allCheckBox.length; i++) {
    if (allCheckBox[i].id != 'Sel_tutto' && allCheckBox[i].checked) 
    nazioni.push(allCheckBox[i].name);
  }

}




//1
async function grabbiamo() {

  selezionaNazioni_DaChbx()
  if(nazioni.length > 0)
  prendiLinkPerNazione();
  else{
    alert("Selezionare almeno una Nazione");
    return;
  }
}

//2
function prendiLinkPerNazione(){
  link = [];
  linkPag2 = [];
  let linkPag1 = document.getElementsByClassName("list-group-item");
  for (let i = 0; i < linkPag1.length; i++) {
    if(nazioni.includes(linkPag1[i].text))
    linkPag2.push(linkPag1[i].href);
  }
  prendiLinkPerCampionato();
}

//3
async function prendiLinkPerCampionato()
{
  for (let x = 0; x < linkPag2.length; x++) {
    openAndTakeCampionato(linkPag2[x]);
    await new Promise(resolve => setTimeout(resolve, 4000));
  }
  
  scrapeData()
  
}

//4
function openAndTakeCampionato(url) {
  const newPageLink = window.open(url, "_blank");
  sleep(grabLinkCampionato, newPageLink);
}

//5
function sleep(fn, parameters) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(fn(parameters)), 4000);
  });
}

//6
async function grabLinkCampionato(webpage) {
  
  await (webpage.document.readyState === 'complete' && webpage.document.body != null)
  if (webpage.document.readyState === 'complete'){
      let nazione = webpage.document.getElementsByClassName("padding-top  text-uppercase size-m")[0].children[4].textContent;
      let campionati = webpage.document.getElementsByClassName("list-group-item");
      link.push(campionati[0].href);
      if(nazione == "Svizzera" || nazione == "Olanda")
      link.push(campionati[1].href);
      webpage.close();
  }  
}

//7
async function scrapeData(){
  for (let x = 0; x < link.length; x++) {
    openAndPush(link[x]);
    await new Promise(resolve => setTimeout(resolve, 4000));
  }
  downloadAsExcel();
}

//8
function openAndPush(url) {
  const newPage = window.open(url, "_blank");
  sleep(grab, newPage);
}

//9
async function grab(webpage) {
    await (webpage.document.readyState === 'complete' && webpage.document.body != null)
    if (webpage.document.readyState === 'complete'){
        
      let heightPage = webpage.document.documentElement.scrollHeight;
        setTimeout((webpage.window.scroll(0, heightPage)),3000);
                
        let tutti_i_blocchi = webpage.document.getElementsByClassName("col-xs-12");
    
        //mi seleziono il blocco under ed over
        for(let i = 0; i<tutti_i_blocchi.length; i++){
            if(tutti_i_blocchi[i].innerText == "Under/Over")
            bloccoUnderOver = tutti_i_blocchi[i].parentElement.parentElement.parentElement.parentElement.parentElement;
        }

        //mi salvo la tabella
        tabellaUnderOver = bloccoUnderOver.getElementsByClassName("table table-condensed")[0];
        //let btn_dove = bloccoMio.getElementsByClassName("OVERUNDER text-center") bottone dove


        //mi prendo il blocco delle prossime partite
        bloccoProssimePartite = webpage.document.getElementsByClassName("hidden-xs-up visible-md-up col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6")[2];
        let buttonMostraPiu = bloccoProssimePartite.getElementsByClassName("btn btn-default mobile-width-100 tablet-width-auto")[0];
        buttonMostraPiu.click();
        let tabellaProssimePartite = bloccoProssimePartite.querySelectorAll('tbody')[0];
        let nEvento = tabellaProssimePartite.getElementsByClassName('text-center')[0].innerText.substring(3,6);
        let prossimePartite = [];
        for(let i = 0; i<tabellaProssimePartite.children.length; i++){
          if(tabellaProssimePartite.children[i].getElementsByClassName('text-center')[0].innerText.substring(3,6)== nEvento)
          prossimePartite.push(tabellaProssimePartite.children[i]);
        }

                
        //prendo gli over 2,5
        //for(let x = 0; x < 3; x++){
          //btn_dove[x].children[0].click()

          //mi prendo solo le righe > 88%
        for (let i = 0; i < tabellaUnderOver.children[1].childElementCount; i++) {
          let numeroPercentualeUO = parseFloat(tabellaUnderOver.getElementsByClassName("hidden-xs-up visible-md-up")[i].textContent);
          let squadraTabellaOver = tabellaUnderOver.getElementsByClassName("hidden-xs-up visible-md-up")[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].textContent; 
          if (numeroPercentualeUO >= 88) {
            let dataEvento;
            for(let x =0; x<prossimePartite.length; x++){
              let squadraCasa = prossimePartite[x].getElementsByClassName('row flex-items-xs-middle')[0].children[0].innerText;
              let squadraOspite = prossimePartite[x].getElementsByClassName('row flex-items-xs-middle')[0].children[2].innerText
              if(squadraCasa == squadraTabellaOver || squadraOspite == squadraTabellaOver)
              dataEvento = prossimePartite[x].getElementsByClassName('row flex-items-xs-middle')[0].children[1].innerText.substring(0,10);
            }
            arrayRighe.push({
              Nazione: webpage.document.getElementsByClassName("padding-top  text-uppercase size-m")[0].children[4].textContent,
              Campionato: webpage.document.getElementsByClassName("padding-bottom size-xl cursor-pointer")[0].textContent.substring(0, (webpage.document.getElementsByClassName("padding-bottom size-xl cursor-pointer")[0].textContent.length - 6)),
              Squadra: squadraTabellaOver,
              Giocate: tabellaUnderOver.getElementsByClassName("hidden-xs-up visible-md-up")[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[3].textContent,
              Percentuale: tabellaUnderOver.getElementsByClassName("hidden-xs-up visible-md-up")[i].textContent + "%",
              Over: webpage.document.getElementById("dropDownSelector").innerText,
              //Dove: btn_dove[x].textContent
              Data_Evento: dataEvento
            });
          }
        }
        //}

        //prendo gli over 1,5
        let ov15 = bloccoUnderOver.getElementsByClassName("col-xs flex-xs-no-grow");
        ov15[0].click();

        // for(let x = 0; x < 3; x++){
        //   btn_dove[x].children[0].click()

          //mi prendo solo le righe > 88%
          for (let i = 0; i < tabellaUnderOver.children[1].childElementCount; i++) {
            let numeroPercentualeUO = parseFloat(tabellaUnderOver.getElementsByClassName("hidden-xs-up visible-md-up")[i].textContent);
            let squadraTabellaOver = tabellaUnderOver.getElementsByClassName("hidden-xs-up visible-md-up")[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].textContent; 
            if (numeroPercentualeUO >= 88) {
              let dataEvento;
              for(let x =0; x<prossimePartite.length; x++){
                let squadraCasa = prossimePartite[x].getElementsByClassName('row flex-items-xs-middle')[0].children[0].innerText;
                let squadraOspite = prossimePartite[x].getElementsByClassName('row flex-items-xs-middle')[0].children[2].innerText
                if(squadraCasa == squadraTabellaOver || squadraOspite == squadraTabellaOver)
                dataEvento = prossimePartite[x].getElementsByClassName('row flex-items-xs-middle')[0].children[1].innerText.substring(0,10);
              }
              arrayRighe.push({
                Nazione: webpage.document.getElementsByClassName("padding-top  text-uppercase size-m")[0].children[4].textContent,
                Campionato: webpage.document.getElementsByClassName("padding-bottom size-xl cursor-pointer")[0].textContent.substring(0, (webpage.document.getElementsByClassName("padding-bottom size-xl cursor-pointer")[0].textContent.length - 6)),
                Squadra: squadraTabellaOver,
                Giocate: tabellaUnderOver.getElementsByClassName("hidden-xs-up visible-md-up")[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[3].textContent,
                Percentuale: tabellaUnderOver.getElementsByClassName("hidden-xs-up visible-md-up")[i].textContent + "%",
                Over: webpage.document.getElementById("dropDownSelector").innerText,
                //Dove: btn_dove[x].textContent
                Data_Evento: dataEvento
              });
            }
          }
        //}
      webpage.close();
    }  
}



//10
function downloadAsExcel(){
  const worksheet = XLSX.utils.json_to_sheet(arrayRighe);
  const workbook = {
    Sheets: {
      'Statistiche': worksheet
    },
    SheetNames : ['Statistiche']
  };
  const excelBuffer = XLSX.write(workbook,{bookType:'xlsx', type:'array'});
  saveAsExcel(excelBuffer, 'Statistiche PlanetWin365 ')
}

//11
function saveAsExcel (buffer, filename){
  const data = new Blob ([buffer], {type: EXCEL_TYPE});
  let d = new Date ()
  let datacompleta = d.getDate().toString() + '-' + (d.getMonth()+1).toString() + '-' + d.getFullYear().toString()
  saveAs(data, filename + datacompleta + EXCEL_EXTENSION)
}
  

//FILESAVER

/*
* FileSaver.js
* A saveAs() FileSaver implementation.
*
* By Eli Grey, http://eligrey.com
*
* License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
* source  : http://purl.eligrey.com/github/FileSaver.js
*/

// The one and only way of getting global scope in all environments
// https://stackoverflow.com/q/3277182/1008999
var _global = typeof window === 'object' && window.window === window
  ? window : typeof self === 'object' && self.self === self
  ? self : typeof global === 'object' && global.global === global
  ? global
  : this

function bom (blob, opts) {
  if (typeof opts === 'undefined') opts = { autoBom: false }
  else if (typeof opts !== 'object') {
    console.warn('Deprecated: Expected third argument to be a object')
    opts = { autoBom: !opts }
  }

  // prepend BOM for UTF-8 XML and text/* types (including HTML)
  // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
  if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
    return new Blob([String.fromCharCode(0xFEFF), blob], { type: blob.type })
  }
  return blob
}

function download (url, name, opts) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    saveAs(xhr.response, name, opts)
  }
  xhr.onerror = function () {
    console.error('could not download file')
  }
  xhr.send()
}

function corsEnabled (url) {
  var xhr = new XMLHttpRequest()
  // use sync to avoid popup blocker
  xhr.open('HEAD', url, false)
  try {
    xhr.send()
  } catch (e) {}
  return xhr.status >= 200 && xhr.status <= 299
}

// `a.click()` doesn't work for all browsers (#465)
function click (node) {
  try {
    node.dispatchEvent(new MouseEvent('click'))
  } catch (e) {
    var evt = document.createEvent('MouseEvents')
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80,
                          20, false, false, false, false, 0, null)
    node.dispatchEvent(evt)
  }
}

// Detect WebView inside a native macOS app by ruling out all browsers
// We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
// https://www.whatismybrowser.com/guides/the-latest-user-agent/macos
var isMacOSWebView = /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)

var saveAs = _global.saveAs || (
  // probably in some web worker
  (typeof window !== 'object' || window !== _global)
    ? function saveAs () { /* noop */ }

  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView
  : ('download' in HTMLAnchorElement.prototype && !isMacOSWebView)
  ? function saveAs (blob, name, opts) {
    var URL = _global.URL || _global.webkitURL
    var a = document.createElement('a')
    name = name || blob.name || 'download'

    a.download = name
    a.rel = 'noopener' // tabnabbing

    // TODO: detect chrome extensions & packaged apps
    // a.target = '_blank'

    if (typeof blob === 'string') {
      // Support regular links
      a.href = blob
      if (a.origin !== location.origin) {
        corsEnabled(a.href)
          ? download(blob, name, opts)
          : click(a, a.target = '_blank')
      } else {
        click(a)
      }
    } else {
      // Support blobs
      a.href = URL.createObjectURL(blob)
      setTimeout(function () { URL.revokeObjectURL(a.href) }, 4E4) // 40s
      setTimeout(function () { click(a) }, 0)
    }
  }

  // Use msSaveOrOpenBlob as a second approach
  : 'msSaveOrOpenBlob' in navigator
  ? function saveAs (blob, name, opts) {
    name = name || blob.name || 'download'

    if (typeof blob === 'string') {
      if (corsEnabled(blob)) {
        download(blob, name, opts)
      } else {
        var a = document.createElement('a')
        a.href = blob
        a.target = '_blank'
        setTimeout(function () { click(a) })
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name)
    }
  }

  // Fallback to using FileReader and a popup
  : function saveAs (blob, name, opts, popup) {
    // Open a popup immediately do go around popup blocker
    // Mostly only available on user interaction and the fileReader is async so...
    popup = popup || open('', '_blank')
    if (popup) {
      popup.document.title =
      popup.document.body.innerText = 'downloading...'
    }

    if (typeof blob === 'string') return download(blob, name, opts)

    var force = blob.type === 'application/octet-stream'
    var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari
    var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent)

    if ((isChromeIOS || (force && isSafari) || isMacOSWebView) && typeof FileReader !== 'undefined') {
      // Safari doesn't allow downloading of blob URLs
      var reader = new FileReader()
      reader.onloadend = function () {
        var url = reader.result
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;')
        if (popup) popup.location.href = url
        else location = url
        popup = null // reverse-tabnabbing #460
      }
      reader.readAsDataURL(blob)
    } else {
      var URL = _global.URL || _global.webkitURL
      var url = URL.createObjectURL(blob)
      if (popup) popup.location = url
      else location.href = url
      popup = null // reverse-tabnabbing #460
      setTimeout(function () { URL.revokeObjectURL(url) }, 4E4) // 40s
    }
  }
)

_global.saveAs = saveAs.saveAs = saveAs

if (typeof module !== 'undefined') {
  module.exports = saveAs;
}