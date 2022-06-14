import { Card } from "./Card/Card";
import { CodeSource } from "./CodeSource/CodeSource";
import { List } from "./List/List";

export const Children = () => {
    return <section>
        <Card titulo="Indoors" subtitulo="Producto 1">
            <CodeSource />
        </Card>
        <Card titulo="Luces" subtitulo="Producto 2">
            <List />
        </Card>
    </section>
};

