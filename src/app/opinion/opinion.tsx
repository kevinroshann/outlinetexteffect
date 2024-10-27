
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Opinion = () => {
    return ( 
        <div className="m-30">
        <h1 className="text-6xl font-bold mr-20 m-20">A Word from Creator</h1> {/* Title with larger font */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', margin:'15px',border: '1px solid #ccc', borderRadius: '8px', width: '400px' }}> {/* Wrapper with border */}
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px' }}> {/* Inner row for Avatar and Name */}
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    
    <h1 style={{ marginLeft: '10px', fontSize: '24px', fontWeight: 'bold' }}> {/* Name styling */}
      Kevin
    </h1>
  </div>

  <p style={{ marginTop: '10px', color: '#555' }}> {/* Description styling */}
    Hey this is a cool Project which i created in my free time. i have been struggling to create such effect in my images .So here is the tool which i made. Just upload the image and customise the text and The image with cool outline effect is ready. I will make the project public when 100 people join the waitlist.
  </p>
</div>
</div></div>
    );
}
 
export default Opinion;