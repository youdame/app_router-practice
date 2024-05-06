"use client";
// form 태그 안에서만 사용할 수 있는 함수이며, 클라이언트 컴포넌트
import { useFormStatus } from "react-dom";
export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
