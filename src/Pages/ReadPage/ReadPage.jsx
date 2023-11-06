import { usePDF } from 'react-to-pdf';

const ReadPage = () => {
    const { toPDF, targetRef } = usePDF({filename: 'Book.pdf'});

    return (
      <div className=' max-w-7xl px-10 mx-auto'>
               <div className="flex flex-col">
            <img className="h-56 object-cover" src='https://i.ibb.co/mq24j7W/istockphoto-1413840933-170667a.webp' alt="" />
            <div ref={targetRef} >
      <span className='flex justify-between'>
      <h2 className="text-2xl">About History</h2>
                <button className='btn btn-secondary  btn-sm lg:btn-md mt-3' onClick={() => toPDF()}>Download as PDF</button>
      </span>
             <p>
             The history of books became an acknowledged academic discipline in the 1980s. Contributors to the discipline include specialists from the fields of textual scholarship, codicology, bibliography, philology, palaeography, art history, social history and cultural history. 
             </p>
             <p>
             text contained within it, is a conduit of interaction between readers and words. Analysis of each component part of the book reveals its purpose, where and how it was kept, who read it, ideological and religious beliefs of the period and whether readers interacted with the text within. Even a lack of evidence of this nature leaves valuable clues about the nature of that particular book.
             </p>
             <p>
             The invention of the printing press in the 15th century marked a pivotal moment, revolutionizing book production. Innovations like movable type and steam-powered presses accelerated manufacturing processes and contributed to increased literacy rates. Copyright protection also emerged, securing authors' rights and shaping the publishing landscape. The Late Modern Period introduced chapbooks, catering to a wider range of readers, and mechanization of the printing process further enhanced efficiency.
             </p>

            </div>
        </div>
      </div>
    );
};

export default ReadPage;