import { useEffect, useRef, useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const CustomSelect = () => {
    const [selectOpen, setSelectOpen] = useState(false);
    const [selectData, setSelectData] = useState([]);
    const outSideClick = useRef();
    const [highlightedText , setHighLightedText] = useState(0);
    const optionRefs = useRef([]);

    function lowerBound (char) {
        let low = 0, high = selectData.length - 1;

        while(low <= high){
            let mid = Math.floor((low + high) / 2);

            let ch = selectData[mid].name[0].toLowerCase();
            if(ch < char){
                low = mid + 1;
            }
            else{
                high = mid -  1;
            }
        }

        return low;
    }

    const [selectedCountryName, setSelectedCountryName] = useState("Select Country Name")
    const handleSelectOpen = () => {
        setSelectOpen((prev) => !prev);
    }

    useEffect(()=> {
        const fetchData = async () => {
            try {
                let fetchSelectData = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
                fetchSelectData = await fetchSelectData.json();
                let Data = fetchSelectData.map((country) => ({
                    name: country.name.common,
                    flag: country.flags.svg
                })).sort((a, b) => a.name.localeCompare(b.name))
                setSelectData(Data);
                // console.log(Data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    },[]);

    useEffect(() => {
        const hadleClickOutside = (e) => {
            if(outSideClick.current && !outSideClick.current.contains(e.target)){
                setSelectOpen(false);
            }
        }

        const handleHighlightedText = (e) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setHighLightedText((prev) =>
                prev < selectData.length - 1 ? prev + 1 : 0
                );
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setHighLightedText((prev) =>
                prev > 0 ? prev - 1 : selectData.length - 1
                );
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (highlightedText >= 0 && highlightedText < selectData.length) {
                handleCountryName(selectData[highlightedText].name);
                }
            } else if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
                let char = e.key.toLowerCase();
                let findIndex = lowerBound(char);
                // console.log(findIndex , selectData[findIndex]);
                setHighLightedText(findIndex);
            }
        };

        if(selectOpen){
            document.addEventListener("mousedown", hadleClickOutside);
            document.addEventListener("keydown", handleHighlightedText);
        }

        return () => {
            document.removeEventListener("mousedown", hadleClickOutside);
            document.removeEventListener("keydown", handleHighlightedText);
        }
    },[selectOpen]);

    const handleCountryName = (name,index) => {
        setSelectedCountryName(name);
        setHighLightedText(index);
        setSelectOpen(false);
    }

    useEffect(() =>{
        if(selectOpen && optionRefs.current[highlightedText]){
            optionRefs.current[highlightedText].scrollIntoView();
        }
    },[highlightedText, selectOpen]);

  return (
    <div className='flex justify-center text-black'>
    <div ref={outSideClick} className='relative mt-4 text-lg border-2 border-black rounded-sm shadow-lg w-[300px]'>
        
        {/* Header */}
        <div
        onClick={handleSelectOpen}
        className='px-4 py-2 flex justify-between cursor-pointer'>
        <h3>{selectedCountryName}</h3>
        <IoIosArrowDropdownCircle className="text-xl self-center" />
        </div>

        {/* Dropdown */}
        {selectOpen && (
        <div className="absolute z-50 top-full left-0 w-full bg-white max-h-[200px] overflow-y-auto border-t border-black">
            {selectData.map((country, index) => (
            <div 
                onClick={() => {handleCountryName(country.name,index)}}
                ref={(el) => optionRefs.current[index] = el}
                key={country.name} className={`px-2 py-4 flex gap-2 hover:bg-blue-700 hover:text-white cursor-pointer ${index === highlightedText ? "bg-blue-700 text-white" : "text-black"}`}>
                <img src={country.flag} alt="flag" className="w-8 h-6" />
                <h3 className="text-lg self-center">{country.name}</h3>
            </div>
            ))}
        </div>
        )}

    </div>
</div>

  )
}

export default CustomSelect