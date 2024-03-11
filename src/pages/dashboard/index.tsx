import { DashboardLayout } from "@/layouts/dashboard";
import Image from "next/image";
import SociAlarmIcon from '@/assets/SociAlarmIcon.svg'

const Dashboard = ()=>
  <DashboardLayout>
    <Image
      src={SociAlarmIcon}
      alt="SociAlarm Logo"
    />
  </DashboardLayout>
export default Dashboard;
