export default function HoverImages() {
  const images = [
    "https://images.unsplash.com/photo-1638980660089-f8c568d5b9e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1532588213355-52317771cce6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683129618086-4c87d263b48b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1622527561244-74e49a3878a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
  ];

  return (
    <div className="flex gap-3 overflow-x-auto md:overflow-visible">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`shrink-0 h-[200px] md:h-[300px] object-cover object-center cursor-pointer rounded-lg transition-all duration-300 ${
            index === 0 ? "w-[250px]" : "w-[50px]"
          } hover:w-[250px]`}
          onMouseEnter={(e) => {
            const parentElement = e.currentTarget.parentElement;
            if (parentElement) {
              parentElement.querySelectorAll("img").forEach((sibling) => {
                sibling.style.width =
                  sibling === e.currentTarget ? "250px" : "50px";
              });
            }
          }}
          onMouseLeave={(e) => {
            const parentElement = e.currentTarget.parentElement;
            if (parentElement) {
              parentElement.querySelectorAll("img").forEach((sibling) => {
                sibling.style.width =
                  sibling === e.currentTarget ? "250px" : "50px";
              });
            }
          }}
        />
      ))}
    </div>
  );
}
