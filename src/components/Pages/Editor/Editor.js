import React, {useState  } from "react";
import styles from '../../Pages/Home/Home.module.css';
import Header from '../../_layouts/Headers/Headers';
import Sidebar from '../../_layouts/Sidebar/Sidebar';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const Editor = () => {
  
    const { quill, quillRef } = useQuill();
    const [value, setvalue] = useState()
    React.useEffect(() => {
      if (quill) {
        quill.on('text-change', () => {
          // console.log('Text change!');
          // console.log(quill.getText()); // Get text only
          // console.log(quill.getContents()); // Get delta contents
          // console.log(quill.root.innerHTML); // Get innerHTML using quill
          console.log(quillRef.current.firstChild.innerHTML);
           // Get innerHTML using quillRef
           setvalue(quillRef.current.firstChild.innerHTML)
        });
      }
    }, [quill]);
    // console.log(value,"This is quill"); //
  return (
    <div className={styles.Summaries} data-testid="Docs">

      <Header title="Overview"></Header>
      {/* <Sidebar  ></Sidebar> */}
        <div class="container-fluid">
   {/* <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>      */}
          
          <div class=" ">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="javascript:void(0)">Layout</a></li>
              <li class="breadcrumb-item active"><a href="javascript:void(0)">Blank</a></li>
              
            </ol>
            
          </div>
             

            <div class="card">
            <table class="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th class="width80">#</th>
                                                <th>CASES</th>
                                                <th>No.Of Cases</th>
                                                <th>DATE</th>
                                                {/* <th>STATUS</th> */}
                                                {/* <th>PRICE</th> */}
                                                <th>ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <div class="table table-responsive-md" style={{  }}>
                                        <div ref={quillRef} />
                                        </div>
                                           
                                        </tbody>
                                    </table>
                                    </div>
                                    
      </div>
      
    </div>
    
    
    
    
  )
}
export default Editor;

