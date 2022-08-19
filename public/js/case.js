let url = 'http://127.0.0.1:8000/cases/';
let aCase = new URLSearchParams(window.location.search).get("key");
let fullUrl = url+aCase;

get_case(fullUrl);

// function to display a specific case
function get_case(fullUrl){
      fetch(fullUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        caseTitle = document.getElementById('case-title');
        caseTitle.innerHTML = `${data.meta_info['Citation:']}`;
        meta_info = data.meta_info;
       
            for (const [key, value] of Object.entries(meta_info)) {
    
            let tr = document.createElement('tr'); 
            let th = document.createElement('th');
            th.innerHTML = key
            let td = document.createElement('td');
            td.innerHTML = value;
    
            tr.appendChild(th)
            tr.appendChild(td)
            
            tableMeta = document.getElementById('table-meta');
            tableMeta.appendChild(tr)
               
              }
              judgementTitle = document.createElement("h2");
              judgementTitle.innerHTML = "Case Summary"
              judgementTitle.classList.add('judgement-title')
              meta.appendChild(judgementTitle)
              console.log(data.judgement)
              data.judgement.map(function(jud) {
                if (jud.type == 'text'){
                let p = document.createElement('p');
                p.innerHTML = jud.j;
                p.classList.add('judgement-para')
                meta.appendChild(p)
                }
                else if (jud.type == 'dated'){
                  let p = document.createElement('p');
                p.innerHTML = jud.j;
                p.classList.add('dated-para')
                meta.appendChild(p)
                }
                else if (jud.type == 'heading'){
                  let p = document.createElement('p');
                  let strong = document.createElement('strong');
                strong.innerHTML = jud.j;
                p.appendChild(strong)
                p.classList.add('judgement-para')
                meta.appendChild(p)
                }
                
            });
            if (data.related_cases.length>0){
              caseContainer = document.getElementById('case-container')
              let p = document.createElement('h2');
              p.innerHTML = 'Related Cases';
              p.classList.add('cases-container')
              meta.appendChild(p)
              let title = document.createElement('label');
              title.innerHTML = 'Summary';
              title.classList.add("tm-color-primary")
                data.related_cases.map(function(related_case) {
              
                fetch(url+related_case)
                  .then(response => {
                    return response.json();
                  })
                .then(related_case_data => {
                  displayCase(related_case_data, caseContainer)
                })
                .catch(rejected => {
                  console.log(rejected);
              });
              
                
          })};

      
        })
      .catch(rejected => {
        console.log(rejected);
    });

    

    
}


function displayCase(aCase, caseContainer) {

  // Create article element to hold a case
  let article = document.createElement('article');
  article.classList.add('col-12', 'col-md-6', 'tm-post');
  caseContainer.appendChild(article);

  // Create hr element to separate title and case content
  let hr = document.createElement('hr');
  hr.classList.add('tm-hr-primary');
  article.appendChild(hr);

  // Create link element attach link to title
  let a = document.createElement('a');
  a.classList.add('effect-lily', 'tm-post-link');
  article.appendChild(a);

  a.href = "case.html?key=" + aCase._id

  // Create h2 element to hold title
  let h2 = document.createElement('h2');
  h2.innerHTML = `${aCase.meta_info['Citation:']}`;
  h2.classList.add('tm-pt-30', 'tm-color-primary', 'tm-post-title', 'case_hr');
  a.appendChild(h2);

  // Create paragragh element to hold content
  let p = document.createElement('p');

  let judgementText = ''

  // Get judgement
  for (let i = 0; i < aCase.judgement.length; i++) {
    judgementText += aCase.judgement[i]['j'] + "<br>";
  }
  p.innerHTML = judgementText;
  p.classList.add('tm-pt-30', 'para');
  article.appendChild(p);

  // Create date div to hold date delivered content
  let dateDiv = document.createElement('div');
  article.appendChild(dateDiv);
  let dateHeaderSpan = document.createElement('span');
  dateHeaderSpan.innerHTML = "Date Delivered";
  dateHeaderSpan.classList.add('tm-color-primary');
  dateDiv.appendChild(dateHeaderSpan);
  let dateSpan = document.createElement('span');
  dateSpan.innerHTML = `${aCase.meta_info['Date Delivered: ']}`;
  dateSpan.classList.add('tm-color-primary');
  dateDiv.classList.add('d-flex', 'justify-content-between', 'tm-pt-45');
  dateDiv.appendChild(dateSpan);

  // Create judge div to hold judge details
  let judgeDiv = document.createElement('div');
  article.appendChild(judgeDiv);
  let judgeHeaderSpan = document.createElement('span');
  judgeHeaderSpan.innerHTML = "Judge";
  judgeDiv.appendChild(judgeHeaderSpan);
  let judgeSpan = document.createElement('span');
  judgeSpan.innerHTML = `${aCase.meta_info['Judge(s): ']}`;
  judgeDiv.classList.add('d-flex', 'justify-content-between', 'judge-div');
  judgeDiv.appendChild(judgeSpan);
}

