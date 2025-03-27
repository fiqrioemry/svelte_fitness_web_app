import { useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const FollowDialog = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.background) {
      window.history.replaceState({}, "", location.pathname);
    }
  }, [location]);

  return (
    <Dialog defaultOpen onOpenChange={(open) => !open && navigate(-1)}>
      <DialogContent className="sm:w-[400px] h-80 p-0 border-none bg-secondary">
        <DialogTitle>
          <Outlet />
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

export default FollowDialog;
