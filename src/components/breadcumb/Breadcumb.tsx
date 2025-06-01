import { NavLink } from "react-router-dom"

export const Breadcumb = (props: any) => {
    const { title } = props;
    return (
        <>
            <div className="banner-breadcumb h-[280px] mb-[40px] relative">
                <img src="/images/banner/breadcrumb.webp" className="w-full h-full object-cover" alt="banner" />
                <ul className="flex items-center justify-center gap-2 text-white text-[20px] font-light absolute top-[90%] left-[52%] translate-x-[-50%] translate-y-[-50%]">
                    <li>
                        <NavLink to="/" className="hover:text-[#f5a623]">Trang chủ</NavLink>
                    </li>
                    <li>
                        <span>/</span>
                    </li>
                    <li>
                        <span className="text-[#f5a623]">{title}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}