import { useState } from 'react'
import {Button} from '../components/ui/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { Sidebar } from '../components/ui/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();
  console.log('Contents:', contents);

  if (!contents) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(contents)) {
    return <div>Error: Invalid content data</div>;
  }

  return (
    <div className="">
      <div>
        <Sidebar/>
      </div>
      <div className="p-4 ml-69 min-h-screen bg-gray-100 border-2 border-gray-200">
        <CreateContentModal 
          open={modalOpen} 
          onClose={() => setModalOpen(false)}
        />
        <div className='flex justify-end gap-4'>
          <Button onClick={()=>{setModalOpen(true)}} variant="primary" size="sm" text="Add Content" startIcon={<PlusIcon size="md"/>} endIcon=""/>
          <Button onClick={async()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
              share:true
            },{
              headers: {
                "Authorization": localStorage.getItem("token")
              }
            })
            const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
            alert(shareUrl);
            }} variant="secondary" text="Share" size="lg" startIcon={<ShareIcon size="md"/>} endIcon=""></Button>
        </div>
        
        <div className="flex gap-4 flex-wrap">
          {contents.map(({title,link,type},index) => (
          <Card 
            key={index}
            type={type.toLowerCase() === 'youtube' ? 'youtube' : 'twitter'} // Force type to be either youtube or twitter
            link={link} 
            title={title || 'Untitled'} // Provide a fallback title
          />
        ))}
          {/* <Card type="twitter" link="https://x.com/Cristiano/status/1932366064588886402" title="Ronaldos tweet"/>
          <Card type="youtube" link="https://www.youtube.com/watch?v=caf1hPv44qA" title="Project Idea"/> */}
        </div>
      </div>
    </div>
  )
}

