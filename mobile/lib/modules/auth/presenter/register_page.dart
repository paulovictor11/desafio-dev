import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:mobile/shared/theme/app_colors.dart';
import 'package:mobile/shared/theme/app_text_styles.dart';
import 'package:mobile/shared/widgets/Input/input_widget.dart';
import 'package:mobile/shared/widgets/button/button_widget.dart';

class RegisterPage extends StatelessWidget {
  const RegisterPage({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {

    final _nomeController = TextEditingController();
    final _emailController = TextEditingController();
    final _senhaController = TextEditingController();

    return Scaffold(
      backgroundColor: AppColors.background,
      body: Padding(
        padding: const EdgeInsets.symmetric(
          horizontal: 16,
          vertical: 8
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const SizedBox(height: 32,),
            Text(
              'Desafio Dev',
              textAlign: TextAlign.center,
              style: AppTextStyles.titlePrimary,
            ),
            Divider(
              thickness: 2,
              color: Colors.grey.shade200,
            ),

            const SizedBox(height: 148,),
            Text(
              'Cadastrar',
              style: AppTextStyles.bigTitlePrimary,
            ),
            Text(
              'Faça o cadastro para desfrutar do sistema!',
              style: AppTextStyles.listRegular,
            ),

            const SizedBox(height: 24,),
            InputWidget(
              keyboardType: TextInputType.emailAddress,
              title: 'Nome',
              label: 'Digite o seu nome',
              controller: _nomeController,
              icon: Icons.person,
              color: AppColors.heading,
            ),
            const SizedBox(height: 8,),
            InputWidget(
              keyboardType: TextInputType.emailAddress,
              title: 'Email',
              label: 'Digite o seu email',
              controller: _emailController,
              icon: Icons.email,
              color: AppColors.heading,
            ),
            const SizedBox(height: 8,),
            InputWidget(
              keyboardType: TextInputType.text,
              title: 'Senha',
              label: 'Digite a sua senha',
              controller: _senhaController,
              icon: Icons.lock,
              obscureText: true,
              color: AppColors.heading,
            ),

            const SizedBox(height: 12,),
            ButtonWidget(
              radius: 8,
              backgroundColor: AppColors.primary,
              text: 'Enviar',
              textStyle: AppTextStyles.buttonWhite,
            ),
            const Spacer(),

            Center(
              child: TextButton(
                style: ButtonStyle(
                  overlayColor: MaterialStateProperty.all<Color>(
                    AppColors.secondary.withOpacity(0.1),
                  ),
                ),
                onPressed: () => Modular.to.pop(),
                child: Text.rich(
                  TextSpan(
                    text: 'Já possui uma conta? ',
                    style: AppTextStyles.captionRegular,
                    children: [
                      TextSpan(
                        text: 'Conectar.',
                        style: AppTextStyles.captionSecondary
                      )
                    ]
                  )
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}