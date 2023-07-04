import MainBanner from "../components/MainBanner";
import ProductCard from "../components/ProductCard";
import Wrapper from "../components/Wrapper";



export default function Home() {
    return <main>
        <MainBanner />
        <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 hover:opacity-75  font-semibold leading-tight">
                        Control your aroundings
                    </div>
                    <div className="text-md md:text-xl">
                        The new way of life automation.
                    <ProductCard />
                    </div>
                </div>
        </Wrapper>
        </main>;

}
