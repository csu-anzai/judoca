def main():
    print("========= GERA CLASSE =========")
    classe = input("Digite o nome da classe: ")

    print("Insira os atributos da classe.")
    print("Para terminar, digite ;")
    atributos = []
    att = ""
    while True:
        att = input()
        if att == ";":
            break
        if att != "":
            atributos.append(att)

    # Declaração da classe
    print("function %s(){" %classe)

    # Declaração dos Atributos
    for atributo in atributos:
        print("\tthis._%s = null;" %atributo.lower())

    print()
    # Getters e Setters
    for atributo in atributos:
        print("\tthis.get%s = function(){" %atributo.capitalize())
        print("\t\treturn this._%s;" %atributo.lower())
        print("\t}")

        print("\tthis.set%s = function(new_value){" %atributo.capitalize())
        print("\t\tthis._%s = new_value;" %atributo.lower())
        print("\t}")

    print("}")
    print("")
    print("module.exports = function(){")
    print("\treturn %s;" %classe)
    print("}")
    
main()
