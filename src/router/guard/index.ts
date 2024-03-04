import { usePermissionGuard } from "@/router/guard/premissions";

export default function useGuard() {
  usePermissionGuard();
}