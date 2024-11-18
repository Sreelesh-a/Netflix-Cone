import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import OpenAI from "openai";
import { OPEN_AI_API_KEY } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getAiSuggestions, removeExistingSuggestions } from "../../utils/userSlice";
import AiSuggestions from "./AiSuggestions";

import AiReply from "./AiReply";
// import { Link } from "lucide-react";
// import { client, OpenAIChat } from "../../utils/openAi";

const GPTPage = () => {
  const [toggleChatScreen, setToggleChatScreen] = useState(false);
  const [storeAiSuggestions, setStoreAiSuggestions] = useState(null);
  const [userInput,setUserInput]=useState(null)

  const dispatch = useDispatch();

  const handleUserInput=(e)=> setUserInput(e.target.value)  
  if (storeAiSuggestions) {
    dispatch(getAiSuggestions(storeAiSuggestions));
  }
  
  
  
  const client = new OpenAI({
    apiKey: OPEN_AI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const OpenAIChat = async (userQuery) => {
    try {
      const AiQuery = `Act as a movie recommendation system and suggest movies for the query: ${userQuery}. Respond with only the names of the movies, providing up to 6 results, separated by commas. Example format: lion, one, 3 idiots, amar akbar anthony, dhosth,mersel`;

      const chatCompletion = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: AiQuery,
          },
        ],
      });

      const response = chatCompletion?.choices[0]?.message?.content;
      const responseArray = response.split(",");
      setStoreAiSuggestions(responseArray);
    } catch (error) {
      console.error("Openi AI Error", error);
    }
  };
  const handleOpenAi = async () => {
    dispatch(removeExistingSuggestions())
    

    // const userInput = GPTSearchText?.current?.value;

    OpenAIChat(userInput);
  };

  const AiSuggestionResult = useSelector((store) => store.user.aiSuggestions);
  const movieDataResult = useSelector((store) => store.user.AiMovieSuggestions);


  const ShimmerLoader=()=>{

   if(movieDataResult.length==0){
    return(
      <div>
        
        {
          userInput ? (<div>
            <div className="text-white text-center text-5xl mt-20 animate-ping">
        <i class="fa-solid fa-spinner"></i>
        </div>


          </div>):(<div>
            <div className="text-white text-center text-2xl  sm:text-4xl sm:mt-2 mt-6 ">
            <i class="fa-solid fa-quote-left"></i><div className="text-normal px-8 sm:px-28 font-semibold">Enter your query to find movie recommendations.<div className="text-sm tracking-wide"><br/>For example: <div className="font-normal">Malayalam funny movies    |   Tamil crime thriller<br/> </div></div> <div className="text-xs font-light mt-6">Note: Recommendations are AI-generated and may not be 100% accurate, but are highly reliable.</div></div>
        </div>

          </div>)
        }
        
      </div>
    )
   }
   
  }



  return (
    <div>
      
      {toggleChatScreen && (
        <div className="fixed z-100 w-full">
          
          <div  className="relative bg-gray-950 bg-opacity-90 sm:w-[70%] w-[100%]  h-screen sm:h-[26.5rem] ml-auto sm:mr-[4.5rem] mt-[6rem] sm:mt-[14.5rem] rounded-2xl overflow-hidden ">
            <div className="">
              
              <form
                className=" py-10 flex justify-center gap-x-2 sm:gap-x-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  // ref={GPTSearchText}
                  value={userInput}
                  onChange={handleUserInput}
                  type="text"
                  className="py-3 px-8 sm:px-8 sm:w-[70%] sm:rounded-full text-lg "
                  placeholder="Whats you looking for today?"
                />
                <button
                  className="sm:px-6 px-4 rounded-xl py-4 sm:rounded-full  bg-red-700 text-white"
                  onClick={handleOpenAi}
                >
                   <i class="fa-solid fa-magnifying-glass text-xl "></i>
                </button>
              </form>
            </div>
            <div>
            {AiSuggestionResult &&
                AiSuggestionResult.map((result, index) => (
                  <AiSuggestions key={index} data={result} />
                ))}
            </div>

            <div className="flex flex-wrap  object-cover justify-center   gap-2 ">
              
              
                {
                  movieDataResult && 
                  movieDataResult.map((results)=>(
                    <div key={results?.id} className="" >
                      <Link to={`/movie/${results?.id}`} onClick={()=>window.scrollTo(0,0)}>
                      
                      
                      <AiReply  data={results}/>
                      </Link>
                      
                      </div>
                  ))
                }
                
                
            </div>
            <div className="object-cover justify-center   ">
            <ShimmerLoader/>
            
            

              </div>
          
           
          </div>
          
        </div>
      )}
      <div className=" fixed z-100 text-2xl sm:right-16 right-10 bottom-10 sm:bottom-16">
        <button
          className="bg-red-600 rounded-full p-4 hover:scale-105 drop-shadow-2xl "
          onClick={() => {
            setToggleChatScreen(!toggleChatScreen);
          }}
        >
          <i class="fa-solid fa-robot text-white"></i>
        </button>
      </div>
    </div>
  );
};

export default GPTPage;
