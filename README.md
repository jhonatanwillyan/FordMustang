# Ford — Linha de montagem, linha de chegada

Experiência editorial sobre a trajetória da Ford, desde o Quadriciclo e o Model T até o Ford GT40, as 24 Horas de Le Mans e os próximos capítulos da marca.

## Executar a versão estática

A pasta `html/` contém o pacote estático pronto para ser servido sem Node.js ou banco de dados. Abra `html/index.html` em um navegador ou sirva o diretório com qualquer servidor HTTP estático:

```bash
cd html
python3 -m http.server 8080
```

Depois, acesse `http://localhost:8080`.

## GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` publica automaticamente o conteúdo de `html/` na branch `main`. A versão pública fica disponível em:

<https://jhonatanwillyan.github.io/FordMustang/>

## Licença

O código-fonte e a versão estática deste projeto são distribuídos sob a [licença MIT](./LICENSE). O uso de imagens, marcas, nomes comerciais e referências de terceiros permanece sujeito aos direitos e avisos aplicáveis de seus respectivos titulares; a licença MIT não transfere esses direitos.

## Conteúdo histórico

As referências institucionais usadas na narrativa estão indicadas dentro da experiência. O capítulo de Le Mans utiliza materiais da Ford e do Automobile Club de l'Ouest (ACO) como fontes editoriais.
