type FeatureCardProps = {
    title: string;
    desc: string;
    img: string;
};

export default function FeatureCard({title, desc, img}: FeatureCardProps){
    return (
        <div className="max-w-xs rounded-xl shadow-xl overflow-hidden bg-white hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
            
            {/* 1. Image Section */}
            <div className="h-40 bg-gray-100 flex justify-center items-center p-4">
                <img 
                    src={img} 
                    alt={`Illustration for ${title}`} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 2. Content Section */}
            <div className="px-5 pt-4 pb-6">
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                    {desc}
                </p>
            </div>
        </div>
    );
};
