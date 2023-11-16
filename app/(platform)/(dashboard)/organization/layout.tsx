import Sidebar from "../_components/sidebar";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
			<div className=" flex gap-x-7">
				{/* shrink-0 makes sure that the sidebar never change its width with changing the screen width */}
				<div className="w-64 shrink-0  hidden md:block">
					<Sidebar />
				</div>
				{children}
			</div>
		</div>
	);
};

export default OrganizationLayout;
