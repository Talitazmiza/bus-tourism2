import { useCallback } from 'react'
import { List } from '../atoms/List'
import { Text } from '../atoms/Text'
import {CompanyInformationTexts} from '../particles/DataLists'
import { InstagramLogo, WhatsappLogo, PhoneCall} from '@phosphor-icons/react'
// import { Card } from '../molecules/Card'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import '../../styles.css';

const CompanyInformation = () => {

    const renderIcons = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <PhoneCall size={32} />;
            case 1:
                return <InstagramLogo size={32} weight="fill" />;
            case 2:
                return <WhatsappLogo size={32} />;
            case 3:
                return <WhatsappLogo size={32} />;
            default:
                return "";
        }
    }, [])

    // @ts-ignore
    return (
        <section className="w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 my-28 gap-5">
            <Text as="p" className="font-light text-base text-color3/80 tracking-widest">
                {CompanyInformationTexts.firstText}
            </Text>
            <main className='w-full grid md:grid-cols-2 lg:gap-6 gap-12 md:gap-5'>
                {/* Card Container  */}
                <div className='w-auto flex flex-col justify-center lg:items-center items-start relative order-1 md:order-2'>
                    <div className="p-5 bg-white w-6/12 shadow-2xl rounded-2xl">
                        <h3 className="font-light text-base text-color3/80 tracking-widest mb-4">Temukan Kami</h3>
                            <div className="h-96">
                                <MapContainer style={{ minHeight: "100%" }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[51.505, -0.09]}>
                                        <Popup>
                                            A pretty CSS3 popup. <br /> Easily customizable.
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                    </div>
                </div>
                {/* Text and Steps Container  */}
                <div className='w-full flex flex-col gap-6 order-2 md:order-1'>
                    <ul className='flex flex-col gap-8 lg:mt-5 mt-3'>
                        {
                            CompanyInformationTexts.listOfSteps.map((step, index) => (
                                <List className='flex gap-5 items-center justify-start' key={index}>
                                    <Text as='p' className={`bg-white ${index === 0 ? "text-blue-950" : index === 1 ? "text-orange-600" : "text-green-500" } p-2 rounded-md`}>
                                        {renderIcons(index)}
                                    </Text>
                                    <Text as='p' className='text-sm text-color3 font-light'>
                                        {step.text}
                                    </Text>
                                </List>

                            ))
                        }
                    </ul>
                </div>
            </main>
        </section>
    )
}

export default CompanyInformation