import 'package:flutter/material.dart';
import 'package:mobile/shared/theme/app_colors.dart';

class InputWidget extends StatelessWidget {
  
  final TextInputType keyboardType;
  final String title;
  final String label;
  final String? initialValue;
  final TextEditingController controller;
  final String? Function(String?)? validator;
  final IconData icon;
  final bool obscureText;
  final Color color;

  const InputWidget({
    Key? key,
    required this.keyboardType,
    required this.title,
    required this.label,
    this.initialValue,
    required this.controller,
    this.validator,
    required this.icon,
    this.obscureText = false,
    required this.color,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      keyboardType: keyboardType,
      controller: controller,
      textAlign: TextAlign.left,
      initialValue: initialValue,
      validator: validator,
      obscureText: obscureText,
      decoration: InputDecoration(
        isDense: true,
        border: const OutlineInputBorder(),
        enabledBorder: OutlineInputBorder(
          borderSide: BorderSide(
            color: color,
            width: 2
          )
        ),
        focusedBorder: const OutlineInputBorder(
          borderSide: BorderSide(
            color: AppColors.primary,
            width: 2
          )
        ),
        prefixIcon: Icon(
          icon,
          color: color,
          size: 28,
        ),
        labelText: label,
        floatingLabelStyle: const TextStyle(
          color: AppColors.primary,
        )
      ),
    );
  }
}
