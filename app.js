const $=s=>document.querySelector(s);
const tabs=["Topics","2 Marks","10 Marks","MCQs","Numericals","Formulas"];
let activeSubject=0,activeUnit=0,activeTab="Topics";
let completed=new Set(JSON.parse(localStorage.getItem("btechDone")||"[]"));
const sampleMCQ={
 SS:[["Which signal satisfies x(-t)=x(t)?",["Odd signal","Even signal","Random signal","Impulse signal"],1,"An even signal is symmetric about the vertical axis."],["The Fourier Series is mainly used to represent:",["Periodic signals","Only random signals","Only impulses","Only noise"],0,"Fourier Series represents periodic signals using harmonically related sinusoids."]],
 PTSP:[["The total probability of all mutually exclusive outcomes in a sample space is:",["0","0.5","1","Depends on the event"],2,"The probability of the complete sample space is one."],["For independent events A and B:",["P(A∩B)=P(A)P(B)","P(A)=P(B)","P(A∪B)=0","P(A|B)=0"],0,"Independence means the occurrence of one event does not change the probability of the other."]],
 EDC:[["The SI unit of mobility is:",["m/s","m²/(V·s)","ohm-m","A/m"],1,"Mobility is drift velocity per unit electric field."],["A PN junction diode is formed by joining:",["Two metals","P-type and N-type semiconductors","Two insulators","Two resistors"],1,"A PN junction contains P-type and N-type semiconductor regions."]],
 STLD:[["Which gates are called universal gates?",["AND and OR","XOR and XNOR","NAND and NOR","NOT and AND"],2,"NAND and NOR can each be used to implement any Boolean function."],["A flip-flop stores:",["One bit","One byte","One word","No information"],0,"A flip-flop is a bistable circuit that stores one binary bit."]],
 HV:[["Self-exploration is a process of:",["Copying others","Understanding oneself","Competing with others","Memorising facts"],1,"Self-exploration helps a person examine desires, thoughts and expectations."],["The basic human aspirations include:",["Happiness and prosperity","Only money","Only status","Only entertainment"],0,"Universal human aspirations are commonly described as continuous happiness and prosperity."]]
};
function renderSubjects(){
 $("#subjectGrid").innerHTML=SUBJECTS.map((s,i)=>`<article class="subject-card" data-sub="${i}"><span class="arrow">›</span><span class="code">${s.code}</span><h3>${s.name}</h3><p>5 units · ${s.units.reduce((n,u)=>n+u.topics.length,0)} topics</p></article>`).join("");
 document.querySelectorAll("[data-sub]").forEach(el=>el.addEventListener("click",()=>openSubject(+el.dataset.sub)));
 updateProgress();
}
function key(){return `${activeSubject}-${activeUnit}`}
function openSubject(i){activeSubject=i;activeUnit=0;activeTab="Topics";$("#workspace").classList.remove("hidden");$("#subjectCode").textContent=SUBJECTS[i].code;$("#subjectTitle").textContent=SUBJECTS[i].name;renderUnit();$("#workspace").scrollIntoView({behavior:"smooth",block:"start"});}
function renderUnit(){
 const s=SUBJECTS[activeSubject],u=s.units[activeUnit];
 $("#unitTitle").textContent=`Unit ${activeUnit+1}: ${u.name}`;
 $("#unitTabs").innerHTML=tabs.map(t=>`<button class="tab ${t===activeTab?"active":""}" data-tab="${t}">${t}</button>`).join("");
 document.querySelectorAll("[data-tab]").forEach(b=>b.addEventListener("click",()=>{activeTab=b.dataset.tab;renderUnit()}));
 const done=completed.has(key());
 $("#unitContent").innerHTML=contentFor(s,u)+`<button class="complete ${done?"done":""}" id="completeBtn">${done?"✓ Completed — mark incomplete":"Mark unit as completed"}</button>`;
 $("#completeBtn").addEventListener("click",()=>{if(completed.has(key()))completed.delete(key());else completed.add(key());localStorage.setItem("btechDone",JSON.stringify([...completed]));renderUnit();updateProgress()});
 document.querySelectorAll(".reveal").forEach(b=>b.addEventListener("click",()=>b.nextElementSibling.classList.toggle("show")));
 document.querySelectorAll(".checkQuiz").forEach(b=>b.addEventListener("click",()=>{const q=b.closest(".question"),chosen=q.querySelector("input:checked"),out=q.querySelector(".answer");if(!chosen){out.textContent="Choose an option first.";out.classList.add("show");return;}const correct=+q.dataset.correct;out.textContent=+chosen.value===correct?"Correct! "+q.dataset.explain:"Not quite. Correct answer: "+q.querySelectorAll("input")[correct].parentElement.textContent.trim()+". "+q.dataset.explain;out.classList.add("show")}));
}
function contentFor(s,u){
 if(activeTab==="Topics")return `<h3>Topics in this unit</h3><ul class="unit-list">${u.topics.map(t=>`<li>${t}</li>`).join("")}</ul><div class="callout"><b>Study tip:</b> Read each topic, write key definitions in your own words, then practise questions and numericals.</div>`;
 if(activeTab==="2 Marks")return `<h3>2-mark question bank</h3><div class="callout">This section is ready for the complete question bank. The starter includes a sample question for this subject; the remaining answers should be filled from your lecturer's prescribed syllabus and notes.</div>${twoMarkSample(s.code)}`;
 if(activeTab==="10 Marks")return `<h3>Important 10-mark answers</h3><p>Prepare each topic with a definition, neat diagram where relevant, step-by-step explanation or derivation, example and conclusion.</p><ul class="unit-list">${u.topics.slice(0,5).map(t=>`<li>Explain ${t.toLowerCase()} with suitable examples.</li>`).join("")}</ul><div class="callout">Full exam-ready answers and derivations are to be added unit by unit.</div>`;
 if(activeTab==="MCQs")return `<h3>MCQ practice</h3><p>Sample questions for ${s.name}. A complete target bank is 50 MCQs per unit.</p>${quizHTML(s.code)}`;
 if(activeTab==="Numericals")return `<h3>Numerical practice</h3><ul class="unit-list">${u.topics.slice(0,5).map(t=>`<li>Practice problems based on ${t.toLowerCase()}.</li>`).join("")}</ul><div class="callout">Solved numerical sets with full working are not yet populated in this starter version.</div>`;
 return `<h3>Revision formulas</h3>${formulaSample(s.code)}<div class="callout">Check symbol definitions and transform conventions against your class notes before the exam.</div>`;
}
function twoMarkSample(code){
 const q={
 SS:["Define an even signal.","A signal satisfying x(-t)=x(t) is called an even signal.","Define impulse response.","It is the output of a system when the input is a unit impulse."],
 PTSP:["Define a random variable.","A random variable is a function that assigns a numerical value to each outcome of a random experiment.","Define CDF.","The cumulative distribution function is F_X(x)=P(X≤x)."],
 EDC:["Define mobility.","Mobility is the drift velocity acquired by a charge carrier per unit electric field.","What is an intrinsic semiconductor?","A pure semiconductor without intentional impurity doping is called an intrinsic semiconductor."],
 STLD:["What is a universal gate?","A gate that can be used alone to implement any Boolean function, such as NAND or NOR.","Define flip-flop.","A flip-flop is a bistable sequential circuit that stores one bit."],
 HV:["What is self-exploration?","It is the process of examining oneself to understand desires, thoughts and expectations.","State two basic human aspirations.","Continuous happiness and prosperity."]
 }[code];
 return `<div class="question"><h4>${q[0]}</h4><button class="tab reveal">Show answer</button><div class="answer">${q[1]}</div></div><div class="question"><h4>${q[2]}</h4><button class="tab reveal">Show answer</button><div class="answer">${q[3]}</div></div>`;
}
function quizHTML(code){return (sampleMCQ[code]||[]).map((q,i)=>`<div class="question" data-correct="${q[2]}" data-explain="${q[3]}"><h4>${i+1}. ${q[0]}</h4>${q[1].map((o,j)=>`<label class="option"><input type="radio" name="q${code}${i}" value="${j}">${String.fromCharCode(65+j)}) ${o}</label>`).join("")}<button class="tab checkQuiz">Check answer</button><div class="answer"></div></div>`).join("")}
function formulaSample(code){
 const f={
 SS:["Energy: E = ∫ |x(t)|² dt","Power: P = lim(T→∞) (1/2T) ∫[-T,T] |x(t)|² dt","Fourier Transform: X(ω) = ∫ x(t)e⁻ʲωᵗ dt"],
 PTSP:["P(A|B) = P(A∩B) / P(B)","E[X] = Σ x p(x) (discrete case)","Var(X) = E[X²] − (E[X])²"],
 EDC:["Conductivity: σ = q(nμₙ + pμₚ)","Mobility: μ = v_d / E","Ohm's law: V = IR"],
 STLD:["De Morgan: (A·B)' = A' + B'","Boolean identity: A + 0 = A","Boolean identity: A·1 = A"],
 HV:["Human aspirations: happiness and prosperity","Self-exploration: verify proposals through natural acceptance and experience","Harmony: understanding, relationship and responsible participation"]
 }[code]||[];
 return `<ul class="unit-list">${f.map(x=>`<li>${x}</li>`).join("")}</ul>`;
}
function updateProgress(){const n=completed.size,total=25;$("#progressText").textContent=`${n} / ${total}`;$("#progressBar").style.width=`${n/total*100}%`;}
$("#backBtn").addEventListener("click",()=>$("#workspace").classList.add("hidden"));
renderSubjects();
let installPrompt;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installPrompt=e;$("#installBtn").classList.remove("hidden")});
$("#installBtn").addEventListener("click",async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$("#installBtn").classList.add("hidden")});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
