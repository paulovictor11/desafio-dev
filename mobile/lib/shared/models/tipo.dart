import 'dart:convert';

class Tipo {
  final int id;
  final String descricao;
  final String natureza;
  final String sinal;
  
  Tipo({
    required this.id,
    required this.descricao,
    required this.natureza,
    required this.sinal,
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'descricao': descricao,
      'natureza': natureza,
      'sinal': sinal,
    };
  }

  factory Tipo.fromMap(Map<String, dynamic> map) {
    return Tipo(
      id: map['id'],
      descricao: map['descricao'],
      natureza: map['natureza'],
      sinal: map['sinal'],
    );
  }

  String toJson() => json.encode(toMap());

  factory Tipo.fromJson(String source) => Tipo.fromMap(json.decode(source));
}
