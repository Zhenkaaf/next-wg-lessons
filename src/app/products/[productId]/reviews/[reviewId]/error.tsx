"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

/* export default function ErrorBoundary({ error }: { error: Error }) {
    return (
        <div className="p-4 bg-red-400 text-red-800">
            {error.message}
            <button
                className="ml-2 px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
                onClick={() => window.location.reload()}
            >
                Try Again
            </button>
        </div>
    );
} */

/* reset() в Server Component Next.js:
не делает полный reload, повторно рендерит сегмент
при отсутствии изменения данных:
ошибка может повторяться бесконечно

window.location.reload():
гарантирует новый execution.

Если ошибка в Client Component:
она ловится React Error Boundary
error.tsx всё равно используется
reset():
размонтирует компонент
монтирует заново
сбрасывает весь локальный state*/

/* export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="p-4 bg-red-400 text-red-800">
            <p>Error: {error.message}</p>
            <button
                className="ml-2 px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
                onClick={reset}
            >
                Try Again
            </button>
        </div>
    );
} */

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const router = useRouter();
    const handleRetry = () => {
        startTransition(() => {
            console.log("products->reviews");
            reset(); //Сброс клиентского состояния
            router.refresh(); //перезагрузка серверных данных
        });
    };

    return (
        <div className="p-4 bg-red-400 text-red-800">
            <p>Error: {error.message}</p>
            <button
                className="ml-2 px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
                onClick={handleRetry}
            >
                Try Again
            </button>
        </div>
    );
}

/* reset() создаёт обновление состояния ErrorBoundary (hasError = false).
router.refresh() инициирует асинхронный серверный render.
Но без startTransition оба обновления попадают в одну очередь React с одинаковым приоритетом.
React планирует их вместе, пытаясь применить асинхронный серверный render и клиентский reset одновременно.
Серверный render ещё не готов, а React уже “прикрепил” старое состояние ErrorBoundary.
В результате reset() не применился к UI, потому что React ждёт “согласованного состояния” поддерева — иначе дочерние компоненты рендерились бы на половину.

Благодаря startTransition, React выделяет это как низкоприоритетное обновление.
React сначала выполняет reset() → ErrorBoundary очищается (hasError = false).
Теперь ErrorBoundary/UI готов отображать новые дочерние компоненты.
Когда приходит новый серверный render, React плавно применяет его к уже очищенному дереву.
Благодаря этому ошибка исчезает, а новый render подгружается без залипания. */
