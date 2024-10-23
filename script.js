const token="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"
const txt=document.querySelector("#txt1")
const btn=document.querySelector(".btn")
const img=document.querySelector("#img")

async function query() {
    img.src="./kOnzy.gif"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: `Bearer ${token }`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs":txt.value}),
		}
	);
	const result = await response.blob();
	return result;
}
btn.addEventListener("click",async function(){
    console.log("hii");
    
query().then((response) => {
	const imgurl=URL.createObjectURL(response)
    img.src=imgurl;
})});