import BranchList from './BranchList';
import BranchBox from './BranchBox';
import Footer from './Footer';
import MobileFooter from './MobileFooter';

function BranchesPage() {

    window.scrollTo(0, 0);

    function dispBranch(db){
        return <BranchBox key = {db.id} img = {db.img} name = {db.name} address = {db.address} phone = {db.phone} mapLink = {db.mapLink}/> 
    }

    return (
        <div id = "branchesPage">
            <h1>Our Branches</h1>
            {BranchList.map(dispBranch)}

            <Footer />
            <MobileFooter />
        </div>
    );
}

export default BranchesPage;