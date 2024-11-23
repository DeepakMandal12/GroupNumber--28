let n ;
let a = [];
let EM = [];
let U = [];
let L = [];
let Uu=[];
let D=[]


function takeorder(id){
    n = document.getElementById(id).value;
}

function getInputfield(id) {
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            document.getElementById(id).innerHTML += `<input type="text" id="a${i+1}${j+1}" placeholder = "Enter value for ${i+1}${j+1}"> `;
        }
        document.getElementById(id).innerHTML += `<br>`;
    }
}

function savematrixA() {
    for (let i=0; i<n; i++) {
        let row = [];
        for (let j=0; j<n; j++) {
            let value = parseFloat(document.getElementById(`a${i+1}${j+1}`).value);
            row.push(value);
        }
        a.push(row);
    }
}

function showMatrix( id) {
    
    document.getElementById(id).innerHTML += matrixFormat(a);
}



function makeIdentity() {
    let mat = [];
    for (let i = 0; i < n; i++) {
        mat[i] = [];
        for (let j = 0; j < n; j++) {
            if (i==j) {
                mat[i][j] = 1
            }
            else {
                mat[i][j] = 0
            }
        }
    } 
    return mat;
}


function matrixFormat(lst) {
    let matStr = "";  
    for (let i of lst) {
        matStr += "[ ";
        for (let j of i) {
            matStr += `${j} `;
        }
        matStr += "]" + `<br>`;
    }
    return matStr;
}


function makeEM(row, col, value) {
    let mat = makeIdentity();
    mat[row][col] = value;
    return mat;
} 

function multwomat(m,mm){
    mul=[]
    for (let i=0;i<n;i++){
        let r=[];
        for ( let j=0;j<n;j++){
            s=0;
            for (let k=0;k<n;k++){
                s+=m[i][k]*mm[k][j];
            }
            r.push(s);
        }
        mul.push(r);
}   
    return mul
}

