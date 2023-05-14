const ArrayContainer = document.querySelector(".array-container");
const Generate = document.querySelector(".generate");
const SortButton = document.querySelector(".selection-sort");
const BubbleSort = document.querySelector(".bubble-sort");
const Quicksort = document.querySelector(".quick-sort");





SortButton.addEventListener("click" , SelectionSort);
BubbleSort.addEventListener("click" , bubblesort );
Quicksort.addEventListener("click" , quick )

Generate.addEventListener("click" , ShowArray);
function ShowArray()
{
    
    for(let i=0;i<50;i++)
    {
        let value = Math.floor(Math.random()*100)+1;
        let valueDiv = document.createElement("div");
        valueDiv.classList.add("valueDiv");
         valueDiv.style.height = `${value*5}px`;
        // valueDiv.style.backgroundcolor = "darkblue";
        valueDiv.textContent = value;
        ArrayContainer.append(valueDiv);
        
    }
}

   

async function SelectionSort(e)
{
    
    let arr = document.querySelectorAll(".valueDiv");
    for(let i=0;i<arr.length;i++)
    {
        arr[i].classList.add("activeclass");
        let minidx = i;
         for(let j=i+1;j<arr.length;j++)
         {
              arr[j].classList.add("activeclass2");
             await new Promise((res) =>{
                 setTimeout(()=>{
                      res();
                 } , 10)
             });

             if(Number(arr[minidx].textContent) > Number(arr[j].textContent))
             {
                 minidx = j;
             }
             arr[j].classList.remove("activeclass2");
              
              
         }

         arr[i].classList.remove("activeclass");
        
        swap(arr ,minidx , i);
         arr[i].classList.add("activeclass3");



    }
}


 function createSound()
{
    console.log("audio");
    let audio = document.createElement("audio");
    audio.src = "./click.mp3"
    audio.play();
    // await new Promise((res) =>{
    //     setTimeout(()=>{
    //          res();
    //     } , 5000)
    // });

}

async function bubblesort()
{
    let arr = document.querySelectorAll(".valueDiv");
    for(let i=0;i<arr.length;i++)
    {   
        console.log(i);
         for(let j=0;j<arr.length-i-1;j++)
         {
              arr[j].classList.add("activeclass");
              arr[j+1].classList.add("activeclass2");
              await new Promise((res) =>{
                 setTimeout(()=>{
                      res();
                 } , 10)
               });

             if(Number(arr[j].textContent) > Number(arr[j+1].textContent))
             {
                  
                swap(arr , j+1  ,  j);
                
                
                 
             }
             arr[j].classList.remove("activeclass");
             arr[j+1].classList.remove("activeclass2");
              
              
         }
         arr[arr.length-i-1].classList.add("activeclass3");


    }
}

async function partiton(arr , value , start , end)
{
    console.log("i am ");
    let i = start;
    let j = start;
    while(j<=end)
    {
         if(Number(arr[j].textContent) > Number(value.textContent))
         {
             j++;
         }
         else
         {
            arr[j].classList.add("activeclass")
            arr[i].classList.add("activeclass2");
           await new Promise((res) =>{
               setTimeout(()=>{
                    res();
               } , 50)
           });
            await swap(arr , j , i);
            arr[j].classList.remove("activeclass")
            arr[i].classList.remove("activeclass2");
            i++;
            j++;
         }
    }
    console.log(i);
    arr[i-1].classList.add("activeclass3");
    return i-1;
}
async function quicksortarray(arr , start , end)
{
    // console.log(start);
    // console.log(end);
      if(start>end)
      {
          return;
      }

      let pivot = await partiton(arr , arr[end] , start , end);
      
     await quicksortarray(arr , start , pivot-1);
     await quicksortarray(arr  , pivot+1 , end);
}

function quick()
{
    let arr = document.querySelectorAll(".valueDiv");
    let start = 0;
    let end = parseInt(arr.length-1);
    quicksortarray(arr ,start , end);
}












async function sortarray(arr , start , mid , end)
{
  
    
    let FirstArray_Index = start;
    let SecondArray_Index = mid+1;
    let temp = [];
   
    while(FirstArray_Index<=mid && SecondArray_Index<=end)
    {
          
           if(Number(arr[FirstArray_Index].textContent) < Number(arr[SecondArray_Index].textContent))
           {
              console.log(arr[FirstArray_Index]);
               arr[FirstArray_Index].classList.add("activeclass");
               arr[SecondArray_Index].classList.add("activeclass2");
               await new Promise((res) =>{
                setTimeout(()=>{
                     res();
                } , 10)
            });

               temp.push(arr[FirstArray_Index]);
               arr[FirstArray_Index].classList.remove("activeclass");
               arr[SecondArray_Index].classList.remove("activeclass2");
               FirstArray_Index++;

           }
           else if(Number(arr[FirstArray_Index].textContent) > Number(arr[SecondArray_Index].textContent))
           {
            console.log(arr[SecondArray_Index]);
                arr[FirstArray_Index].classList.add("activeclass2");
                arr[SecondArray_Index].classList.add("activeclass");
                await new Promise((res) =>{
                    setTimeout(()=>{
                         res();
                    } , 10)
                });
   
                temp.push(arr[SecondArray_Index]);
                arr[FirstArray_Index].classList.remove("activeclass2");
                arr[SecondArray_Index].classList.remove("activeclass");
                SecondArray_Index++;      
           }
           else
           {
                  arr[FirstArray_Index].classList.add("activeclass2");
                  arr[SecondArray_Index].classList.add("activeclass");
                  await new Promise((res) =>{
                    setTimeout(()=>{
                         res();
                    } , 10)
                });
   
                  temp.push(arr[SecondArray_Index]);
                  temp.push(arr[FirstArray_Index]);
                 arr[FirstArray_Index].classList.remove("activeclass2");
                 arr[SecondArray_Index].classList.remove("activeclass");
                SecondArray_Index++;  
                FirstArray_Index++;
           }
    }


    while(FirstArray_Index<=mid)
    {
        arr[FirstArray_Index].classList.add("activeclass");
        await new Promise((res) =>{
            setTimeout(()=>{
                 res();
            } , 1000)
        });

        temp.push(arr[FirstArray_Index]);
        arr[FirstArray_Index].classList.remove("activeclass");
        FirstArray_Index++;


    }
    while(SecondArray_Index<=end)
    {
        arr[SecondArray_Index].classList.add("activeclass");
        await new Promise((res) =>{
            setTimeout(()=>{
                 res();
            } , 10)
        });

        temp.push(arr[SecondArray_Index]);
        arr[SecondArray_Index].classList.remove("activeclass");
        SecondArray_Index++;
    }
    let k = start
    for(let i = 0 ; i<temp.length;i++)
    {
       
        temp[i].classList.add("activeclass3");
        arr[k++] = temp[i];
        
    }
    temp = [];

}

async function merge(arr , start , end)
{
    
    start = Number(start);
    end = Number(end);
    if(start>=end)
    {
        return new Promise((res) =>{
            setTimeout(()=>{
                 res();
            } , 10)
        });
    }
    let mid = parseInt(start+(end-start)/2);
    mid = parseInt(mid);
   // console.log(mid);
    await merge(arr , start , mid);
     await merge(arr , mid+1 , end);
     console.log(start);
     console.log(mid);
     console.log(end);
    await sortarray(arr , start , mid ,  end);

}

function mergesort()
{
    
    let arr = document.querySelectorAll(".valueDiv");
    let start =0;
    let end = arr.length-1;
   // console.log(end)

       
    merge(arr , start , end);
}



function swap(arr , first  , second)
{

                // let minvalue = arr[minidx].textContent;
                // let minvalueheight = arr[minidx].style.height;
                // arr[minidx].textContent = arr[j].textContent;
                // arr[minidx].style.height = arr[j].style.height;
                // arr[j].style.height = minvalueheight;
                // arr[j].textContent = minvalue;
                createSound();
                let minvalue = arr[first].textContent;
                let minvalueheight = arr[first].style.height;
                arr[first].textContent = arr[second].textContent;
                arr[first].style.height = arr[second].style.height;
                arr[second].style.height = minvalueheight;
                arr[second].textContent = minvalue;

}
