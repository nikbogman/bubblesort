function RandomBetween(min, max) 
{
    return Math.round(Math.random() *  (max - min + 1) + min);
}

function CheckUniqueness(arr, number) 
{
    for (let i = 0; i < arr.length; i++) {
        if(number == arr[i])
            return false;
    }
    return true;
}

function swap(a,b) 
{
    let temp = a;
    a = b;
    b = temp;
}

//Sorting Algorithms
function BubbleSort(array) 
{
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) 
                swap(array[j],array[j+1]);
        }
    }
    return array;
}

function SelectionSort(array) 
{
    let min_index;
    for (let i = 0; i < array.length - 1; i++) {
        min_index = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[min_index])  
                min_idx = j; 
            swap(array[j],array[j+1]);
        }
        
    }
    return array;
}

function InsertationSort(array) 
{
    let curr;
    for (let i = 1; i < array.lenght; i++) 
    {  
        curr = array[i];  
        j = i - 1;  
        while (j >= 0 && array[j] > curr) 
        {  
            array[j + 1] = array[j];  
            j = j - 1;  
        }  
        array[j + 1] = curr;  
    }  
    return array;
}


var arr = [];
var len = 10;
var min = 0;
var max = len * len;

for (let i = 0; i < len; i++) 
{
    var number;
    do{
        number = RandomBetween(min,max);
    }while(!CheckUniqueness(arr, number))
    arr[i] = number;
}

console.log(arr);
console.log(BubbleSort(arr));
console.log(SelectionSort(arr));
